import React, { useState } from "react";
import Logo from "./logo.png";
import { grammar } from "../data";
import CommonPopup from "./CommonPopup";
export default function Content() {
  const [data] = useState(grammar);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentData, setCurrentData] = useState<any>(null);
  return (
    <div>
      <nav style={{ width: "100%", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "320px", marginTop: "30px" }}
            src={Logo}
            alt=""
          />
          <p style={{ fontFamily: "Acme", color: "gray" }}>
            Hello and Welcome to GrammarCraft.com
          </p>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        
        {data.map((items) => {
          return (
            <div
              className="topics"
              onClick={() => {
                setOpenDialog(true);
                setCurrentData(items);
              }}
              style={{
                padding: "0px 10px",
                marginTop: "20px",
                borderRadius: "10px",
                color: "#002e4d",
                boxShadow: "0px 0px 5px 0px #cccccc",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h1 className="topic-heading">{items.topic}</h1>
            </div>
          );
        })}
      </div>
      {openDialog && (
        <CommonPopup
          open={openDialog}
          setOpen={setOpenDialog}
          data={currentData}
        />
      )}
    </div>
  );
}