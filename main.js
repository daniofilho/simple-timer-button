const timerController = () => {
  const timer_duration = 5;

  const timer_ready_text = "Iniciar";
  const timer_ongoing_text = "Aguarde %%SECONDS%%%s...";

  let button_container_dom = null;
  let button_dom = null;
  let timer = null;
  let seconds = 0;

  const handleTimer = () => {
    seconds = seconds - 1;
    button_dom.innerText = timer_ongoing_text.replace("%%SECONDS%%%", seconds);

    if (seconds === 0 && timer) {
      button_dom.disabled = false;
      button_dom.innerText = timer_ready_text;
      clearInterval(timer);
    }
  };

  const startTimer = () => {
    if (timer) clearInterval(timer);

    seconds = timer_duration;
    button_dom.innerText = timer_ongoing_text.replace("%%SECONDS%%%", seconds);

    timer = setInterval(handleTimer, 1000);
    button_dom.disabled = true;
  };

  const setup = ({ container_dom_id }) => {
    button_container_dom = document.getElementById(container_dom_id);

    button_dom = button_container_dom.querySelector("button");
    button_dom.addEventListener("click", startTimer);
    button_dom.click();
  };

  return {
    setup,
  };
};

window.onload = () => {
  timerController().setup({
    container_dom_id: "timer-button-container",
  });
};
