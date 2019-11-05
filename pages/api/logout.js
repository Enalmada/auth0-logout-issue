import auth0 from "../../lib/auth0";

export default async function logout(req, res) {
  try {
    res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    await auth0.handleLogout(req, res);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    res.status(error.status || 500).end(error.message);
  }
}
