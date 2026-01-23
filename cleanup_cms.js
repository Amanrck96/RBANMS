const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/lib/cms-defaults.ts');
console.log(`Processing file: ${filePath}`);

try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // split by \r\n for windows or \n then join with platform specific?
    // safer to split by /\r?\n/
    const lines = content.split(/\r?\n/);
    console.log(`Total lines: ${lines.length}`);

    const rangesToRemove = [
        [248, 373], // Commerce
        [589, 593], // Management Top
        [618, 665], // Management Tabs
        [668, 724], // English
        [727, 771], // Languages
        [774, 802], // PhysEd
        [805, 893], // BCA
        [895, 947]  // Arts
    ];

    const newLines = lines.filter((_, index) => {
        const lineNum = index + 1;
        // Check if lineNum is in any range
        for (const [start, end] of rangesToRemove) {
            if (lineNum >= start && lineNum <= end) return false;
        }
        return true;
    });

    console.log(`New total lines: ${newLines.length}`);
    fs.writeFileSync(filePath, newLines.join('\n'));
    console.log('Successfully updated cms-defaults.ts');

} catch (error) {
    console.error('Error processing file:', error);
    process.exit(1);
}
