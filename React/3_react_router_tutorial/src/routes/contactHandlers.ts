import { type LoaderFunctionArgs } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export async function loader({ params }: LoaderFunctionArgs) {
  const contactId = params.contactId;
  if (!contactId) {
    throw new Error("Contact ID is required");
  }
  const contact = await getContact(contactId);

  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found"
    });
  }
  return { contact };
}

export async function action({ request, params }: LoaderFunctionArgs) {
  const contactId = params.contactId;
  if (!contactId) {
    throw new Error("Contact ID is required");
  }

  const formData = await request.formData();
  return updateContact(contactId, {
    favorite: formData.get("favorite") === "true"
  })
}
