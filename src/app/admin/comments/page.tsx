import { fetchPendingComments } from "@/lib/data"
import { adminTest } from "../actions/actions"
import { PendingComments, PendingComment } from "@/components/admin/PendingComments"
import Link from 'next/link'

export default async function PendingCommentsPage() {
  const user = await adminTest();
  const pendingComments = await fetchPendingComments();
  const userRole = user == null ? "0" : user?.role;

  return (
    <>
	  <div>Pending Comments</div>
	  <br />
	  <PendingComments>
	  {pendingComments.map((c) => (
		<PendingComment key={c.id} id={c.id} dateAdded={c.dateAdded.toLocaleDateString('tr-TR')} authorName={c.authorName} comment={c.comment} canEdit={userRole} />
	  ))}
	  </PendingComments>

	  <br />
    </>
  )
}