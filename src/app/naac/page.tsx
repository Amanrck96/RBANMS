import { DepartmentLayout } from '@/components/layout/department-layout';
import { DocumentFolder } from '@/components/ui/document-folder';

export default function NAACPage() {

  const documentsContent = (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold border-l-4 border-primary pl-4 text-black">NAAC DOCUMENTS & CERTIFICATES</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <DocumentFolder title="Cycle 1 Accreditation" items={[
          { id: 'c1-ssr', name: 'Self Study Report (SSR) - Cycle 1', type: 'file', size: '2.5 MB' },
          { id: 'c1-cert', name: 'NAAC Certificate - Cycle 1', type: 'file', size: '1.2 MB' }
        ]} />
        <DocumentFolder title="Cycle 2 Accreditation" />
        <DocumentFolder title="Cycle 3 Accreditation" />
        <DocumentFolder title="Cycle 4 Accreditation (Ongoing)" />
        <DocumentFolder title="IIQA" />
        <DocumentFolder title="Undertaking" />
        <DocumentFolder title="AQAR" items={[
          { id: 'aqar1', name: 'AQAR Document - 1', type: 'file', url: 'https://drive.google.com/open?id=1GPPOW667gY2jpxg48OGXS5XBE9JhIvYC&usp=drive_copy' },
          { id: 'aqar2', name: 'AQAR Document - 2', type: 'file', url: 'https://drive.google.com/open?id=1tSfh5-xl8rv6ImE4zmPrLCvxCEwPlPZX&usp=drive_copy' },
          { id: 'aqar3', name: 'AQAR Document - 3', type: 'file', url: 'https://drive.google.com/open?id=1Z__ClPtoOQRHbakqLc6rvCFDgeEgWIvB&usp=drive_copy' },
          { id: 'aqar4', name: 'AQAR Document - 4', type: 'file', url: 'https://drive.google.com/open?id=18hpQj-EhrMR0s-NNq0_GYe1UDRMGBb2-&usp=drive_copy' },
        ]} />
        <DocumentFolder title="Certificates" items={[
          { id: 'cert1', name: 'Certificate - 1', type: 'file', url: 'https://drive.google.com/open?id=1H7_5lRqjoGL9pin6Wb7m1Nizw6ku5qOc&usp=drive_copy' },
          { id: 'cert2', name: 'Certificate - 2', type: 'file', url: 'https://drive.google.com/open?id=1VQUzoE5vVt0DHPmqHPBckSOyCEJSrpzM&usp=drive_copy' },
          { id: 'cert3', name: 'Certificate - 3', type: 'file', url: 'https://drive.google.com/open?id=1rw9sWy3Euzqq5nMIRKOjcjm52-6tEH7K&usp=drive_copy' },
          { id: 'cert4', name: 'Certificate - 4', type: 'file', url: 'https://drive.google.com/open?id=1p8XTQ5vo3Qk9rRoWWrfsDNlXrqY3wUEq&usp=drive_copy' },
        ]} />
        <DocumentFolder title="SSR" items={[
          { id: 'ssr1', name: 'SSR Document', type: 'file', url: 'https://drive.google.com/file/d/18b7Qbb8pW6Ien3-e5HROO2h_r4NiFW8O/view?usp=drive_link' },
        ]} />
        <DocumentFolder title="Old IOT" items={[
          { id: 'oldiot1', name: 'Old IOT Document - 1', type: 'file', url: 'https://drive.google.com/file/d/1CY0LNcecrUKUIEHjrM53qq7_Yn1soXQu/view?usp=drive_link' },
          { id: 'oldiot2', name: 'Old IOT Document - 2', type: 'file', url: 'https://drive.google.com/open?id=1EiJ4se_Q676_P4s9st6hIUq7bjC7w5gy&usp=drive_copy' },
          { id: 'oldiot3', name: 'Old IOT Document - 3', type: 'file', url: 'https://drive.google.com/open?id=1BKeId007JQs3qMGxj75eNMpD1ptPRMLN&usp=drive_copy' },
          { id: 'oldiot4', name: 'Old IOT Document - 4', type: 'file', url: 'https://drive.google.com/open?id=1fzv_sBOl74vUuh17mGzF2Zjwtw_zzkEc&usp=drive_copy' },
          { id: 'oldiot5', name: 'Old IOT Document - 5', type: 'file', url: 'https://drive.google.com/open?id=1uuyceTx2xoZpTFJgpIr4Layqe2W39oaE&usp=drive_copy' },
          { id: 'oldiot6', name: 'Old IOT Document - 6', type: 'file', url: 'https://drive.google.com/open?id=160WR8BM-ZqsGNFn5bB497ZDaBon7fXoO&usp=drive_copy' },
          { id: 'oldiot7', name: 'Old IOT Document - 7', type: 'file', url: 'https://drive.google.com/open?id=1Yv8DAf9Jbta5dAl3krVU95Anv7oFfYJu&usp=drive_copy' },
          { id: 'oldiot8', name: 'Old IOT Document - 8', type: 'file', url: 'https://drive.google.com/open?id=1CMvM6tByddqIDe7ylbQqglyAVFA7HtyY&usp=drive_copy' },
          { id: 'oldiot9', name: 'Old IOT Document - 9', type: 'file', url: 'https://drive.google.com/open?id=1HGQP4-GBRl2rufsJfPjuvL5FIfrzXuZY&usp=drive_copy' },
          { id: 'oldiot10', name: 'Old IOT Document - 10', type: 'file', url: 'https://drive.google.com/open?id=1Dg1w8QDhsOIv_0UvZkZaNPYdt2v3mYdf&usp=drive_copy' },
          { id: 'oldiot11', name: 'Old IOT Document - 11', type: 'file', url: 'https://drive.google.com/open?id=1ajoOUgCrxukOc0BAUgHTGMsnQR2tP3MZ&usp=drive_copy' },
          { id: 'oldiot12', name: 'Old IOT Document - 12', type: 'file', url: 'https://drive.google.com/open?id=1eUErSIaIG8_65zCDqi1Wur_jb9p2y6uC&usp=drive_copy' },
          { id: 'oldiot13', name: 'Old IOT Document - 13', type: 'file', url: 'https://drive.google.com/open?id=1apj7Da-WNzhBlV0yG1MS1eYvl_GVRTyu&usp=drive_copy' },
          { id: 'oldiot14', name: 'Old IOT Document - 14', type: 'file', url: 'https://drive.google.com/open?id=1K2X_HhzxGX1CdDzbzJf_t0g1nOZh3-Ud&usp=drive_copy' },
          { id: 'oldiot15', name: 'Old IOT Document - 15', type: 'file', url: 'https://drive.google.com/open?id=1t2UzA0Sub4KK71t3xsVf1FXyIRw2GJ2I&usp=drive_copy' },
        ]} />
        <DocumentFolder title="Old Organic Farming" items={[
          { id: 'oldof1', name: 'Old Organic Farming Document - 1', type: 'file', url: 'https://drive.google.com/open?id=1n7MNmYmLw3_1Fu4dSoS5jFZgMYorwvKB&usp=drive_copy' },
          { id: 'oldof2', name: 'Old Organic Farming Document - 2', type: 'file', url: 'https://drive.google.com/open?id=1zX6EJ1-HfadroL-ddlQsBpmpLA0x81u-&usp=drive_copy' },
          { id: 'oldof3', name: 'Old Organic Farming Document - 3', type: 'file', url: 'https://drive.google.com/open?id=1jbSgT4au3YUoBgCLUeldQz4PTGRKdNCW&usp=drive_copy' },
          { id: 'oldof4', name: 'Old Organic Farming Document - 4', type: 'file', url: 'https://drive.google.com/open?id=1UKEEaomi-4X0Qm-HPF3bkDWxGqTbDZv0&usp=drive_copy' },
          { id: 'oldof5', name: 'Old Organic Farming Document - 5', type: 'file', url: 'https://drive.google.com/open?id=1cJ4AJOsUZhhG7v9dGGovx-YxKzkJ8RGh&usp=drive_copy' },
          { id: 'oldof6', name: 'Old Organic Farming Document - 6', type: 'file', url: 'https://drive.google.com/open?id=1gHBrmhbldHQ0CEQcmpZYwBFOf_ibz-VP&usp=drive_copy' },
        ]} />
      </div>
    </div>
  );

  const sections = [
    { id: 'documents', label: 'Documents', content: documentsContent },
  ];

  return (
    <DepartmentLayout
      title="NAAC Accreditation"
      tagline="National Assessment and Accreditation Council (NAAC) Documentation"
      sections={sections}
    />
  );
}
