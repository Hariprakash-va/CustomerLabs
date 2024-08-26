import React, { useState } from "react";
import SchemaList from "./SchemaList";
import "./Popup.css";

const schemaOptions = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

function Popup({ onClose }) {
  const [segmentName, setSegmentName] = useState("");
  const [schemas, setSchemas] = useState([]);
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const handleSegmentNameChange = (e) => {
    setSegmentName(e.target.value);
  };

  const handleSave = async () => {
    const data = {
      segment_name: segmentName,
      schema: schemas.map((schema) => ({
        [schema]: schemaOptions.find((option) => option.value === schema)
          ?.label,
      })),
    };

    try {
      const response = await fetch(
        "https://webhook.site/662c36e9-300d-4600-8db2-f21a3d7c332e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          mode: "no-cors",
        }
      );

      setNotification("Segment saved Successfully");
      setNotificationType("success");
      setTimeout(() => {
        setNotification("");
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setNotification("Error occurred");
      setNotificationType("error");
      setTimeout(() => setNotification(""), 3000);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div>
          <label>
            Segment Name:
            <input
              type="text"
              value={segmentName}
              onChange={handleSegmentNameChange}
            />
          </label>
          <SchemaList schemas={schemas} setSchemas={setSchemas} />
          <button onClick={handleSave} className="save-segment-button">
            Save the segment
          </button>
          {notification && (
            <div className={`notification ${notificationType}`}>
              {notification}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;
