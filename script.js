function playAudio() {
  const audio = document.getElementById("audioPlayer");
  audio.play().catch(err => {
    alert("Could not play audio. Try clicking the play button manually.");
    console.error(err);
  });
}