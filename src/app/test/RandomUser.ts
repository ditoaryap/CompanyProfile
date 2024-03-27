export default async function getData() {
  try {
    const rawResponse = await fetch(
      "https://randomuser.me/api/?results=3&inc=name,email,picture",
      {
        next: {
          revalidate: 5,
        },
      }
    );
    const response = await rawResponse.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}