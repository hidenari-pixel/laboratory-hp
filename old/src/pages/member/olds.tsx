import { useMembers } from '../../features/member/api/getMembers';
import { MemberCell } from '../../features/member/components/MemberCell';
import { Member } from '../../features/member/types/member';
import { Layout } from '../../shared/components/Layout';
import { PageLoading } from '../../shared/components/PageLoading';
import { Section } from '../../shared/components/Section';
import { SpLayout } from '../../shared/components/sp/Layout';
import { SpSection } from '../../shared/components/sp/Section';

const extractOlds = (members: Member[]) => {
  return members.filter((member) => member.old);
};

const Olds = () => {
  const membersQuery = useMembers();

  const members = membersQuery.data || [];

  if (membersQuery.isLoading) {
    return <PageLoading />;
  }

  const olds = extractOlds(members);

  return (
    <>
      <Layout>
        <div className="mx-auto w-[60vw]">
          <Section title="OB・OG">
            <div className="grid grid-cols-2 gap-3">
              {olds.map((o) => (
                <MemberCell key={o.id} member={o} />
              ))}
            </div>
          </Section>
        </div>
      </Layout>
      <SpLayout>
        <>
          {/* ヘッダーのパディング用要素 */}
          <div className="h-[9vh]"></div>
          <SpSection title="OB・OG">
            <div className="flex flex-col space-y-3">
              {olds.map((o) => (
                <MemberCell key={o.id} member={o} sp />
              ))}
            </div>
          </SpSection>
        </>
      </SpLayout>
    </>
  );
};

export default Olds;
