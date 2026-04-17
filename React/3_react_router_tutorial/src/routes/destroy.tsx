import { deleteContact } from "../contacts";
import { redirect, type ActionFunctionArgs } from "react-router-dom";

export async function action({ params }: ActionFunctionArgs) {
  throw new Error("daaamn");
  deleteContact(params.contactId!);
  return redirect(`/`);
}