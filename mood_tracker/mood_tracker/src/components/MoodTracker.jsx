import { useState } from "react";

function MoodTracker() {
  const messages={
    "😭":"mon kharap?",
    "🙂":"kheyo na senti"
  };

  const [selectedMood, setSelectedMood] = useState(null)
  const messageskeys = Object.keys(messages)
  console.log(messageskeys)
  return (
    <div className="mood-tracker-parents">
     mood tracker
        <div className="emoji-panel">
         {
        messageskeys.map(emojie=>{
            return <button className="emoji-btn" onClick={()=>setSelectedMood(emojie)}>{emojie}</button>
        })
     }
     </div>
     <p>{messages[selectedMood]}</p>
    </div>
  )
}

export default MoodTracker