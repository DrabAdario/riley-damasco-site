import { getNotes } from "./actions";
import AdminContent from "./AdminContent";

export const metadata = { title: "Admin | Riley Damasco" };

export default async function AdminPage() {
  const notes = await getNotes();

  return <AdminContent notes={notes} />;
}
