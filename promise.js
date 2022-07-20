// promise is used mainly to handle asynchronous operation result

// if promise fulfill it will call resolve
// if not fulfill then it will call reject

const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});

const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
  return Promise.resolve(calendar);
};

meeting
  .then(addToCalendar)
  .then((res) => {
    // resolved data
    console.log(res);
  })
  .catch((err) => {
    // rejected data
    console.log(err.message);
  });

console.log("Hello");
