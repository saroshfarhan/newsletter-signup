import mainImg from "./assets/illustration-sign-up-desktop.svg";
import tick from "./assets/icon-list.svg";

function App() {
  return (
    <div className="container mx-auto flex h-[100vh] items-center justify-center">
      <div className="flex w-[60vw] items-center justify-between gap-8 rounded-2xl bg-white p-6">
        <div className="text-bgSlateGray pl-8">
          <h1 className="text-[3.4rem] font-bold">Stay updated!</h1>
          <p className="mb-4 mt-4 text-left font-normal">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="mb-4 mt-6 grid gap-3">
            <div className="flex items-center gap-2">
              <img src={tick} alt="pointers" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={tick} alt="pointers" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={tick} alt="pointers" />
              <p>And much more!</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={mainImg} alt="desktop image illutration" />
        </div>
      </div>
    </div>
  );
}

export default App;
