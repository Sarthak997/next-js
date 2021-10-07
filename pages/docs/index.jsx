import React from "react";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  const id = 2;
  return (
    <div>
      Trying catch all functionality enter any url
      <button onClick={(e) => router.push("/")}>Go Home</button>
      {/* note the router push below notes id and as  */}
      <button onClick={(e) => router.push("/notes/[id]", `/notes/${id}`)}>
        Dashboard
      </button>
    </div>
  );
}

export default index;
