import re

file_path = r'c:\Users\amanr\RBANMS\RBANMS\src\app\admission\page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

fields = [
    'contactNumber', 'email', 'gender', 'nationality', 'caste', 'religion', 
    'dob', 'village', 'taluk', 'district', 'state', 'motherTongue', 'bloodGroup',
    'permanentAddress', 'pinCode', 'addressContact',
    'fatherName', 'fatherOcc', 'fatherContact', 'fatherIncome',
    'motherName', 'motherOcc', 'motherContact', 'motherIncome',
    'qualifyingExam', 'monthYearPassing', 'noOfAttempts',
    'collegeAttended', 'collegePlace', 'combination', 'languageDetails',
    'guardianName', 'guardianAddress', 'guardianContact', 'guardianEmail',
    'noOfDependents', 'noOfBrothers', 'noOfSisters', 'workHostelAddress', 'stayingWith'
]

for field in fields:
    pattern = r"\{\.\.\.register\('" + field + r"'\)\}"
    repl = "{...register('" + field + "', { required: true })} required"
    content = re.sub(pattern, repl, content)

content = content.replace("const originalFormStyle = formRef.current.style.cssText;", "window.scrollTo(0, 0);\n        const originalFormStyle = formRef.current.style.cssText;")
content = content.replace("const canvas = await html2canvas(pageEl, { scale: 1.5, backgroundColor: '#FFFDE8', windowWidth: 1024 });", "const canvas = await html2canvas(pageEl, { scale: 1.5, backgroundColor: '#FFFDE8', windowWidth: 1024, scrollY: 0 });")
content = content.replace("const canvas = await html2canvas(formRef.current, { scale: 1.5, backgroundColor: '#FFFDE8', windowWidth: 1024 });", "const canvas = await html2canvas(formRef.current, { scale: 1.5, backgroundColor: '#FFFDE8', windowWidth: 1024, scrollY: 0 });")

# Optional: Add asterisk to labels for visual cue. This is tricky but we can try to add asterisk to all labelClass if they are mandatory.
# Since we made almost everything mandatory, we could just add it, but maybe just leave the HTML5 required attribute to show native errors.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Done editing page.tsx')
