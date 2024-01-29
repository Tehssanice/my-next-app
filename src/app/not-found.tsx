import { Bungee_Spice } from "next/font/google";

const bungee_spice = Bungee_Spice({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
  return (
    <>
      <div className={bungee_spice.className}>
        <div className="four-o-four-page">
          <h1 className="not-found">404</h1>

          <p>Oops!!! Page not found</p>
        </div>
      </div>
    </>
  );
}
