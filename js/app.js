const select = (element) => document.querySelector(element);

const setBackground = (element, color) => {
  return (element.style.background = color);
};

const getAllTraffic = () => {
  const redTrafficOne = select(".red-1");
  const orangeTrafficOne = select(".orange-1");
  const greenTrafficOne = select(".green-1");

  const redTrafficTwo = select(".red-2");
  const orangeTrafficTwo = select(".orange-2");
  const greenTrafficTwo = select(".green-2");

  const redTrafficThree = select(".red-3");
  const orangeTrafficThree = select(".orange-3");
  const greenTrafficThree = select(".green-3");

  setBackground(redTrafficOne, "red");
  setBackground(orangeTrafficTwo, "#ff9800");
  setBackground(greenTrafficThree, "green");
  let counter = 0;
  setInterval(() => {
    if (counter >= 3) {
      counter = 0;
    }

    if (counter == 0) {
      //  First Traffic Lights

      setBackground(redTrafficOne, "red");
      setBackground(orangeTrafficOne, "rgb(71 69 66)");
      setBackground(greenTrafficOne, "rgb(71 69 66)");

      setBackground(redTrafficTwo, "rgb(71 69 66)");
      setBackground(orangeTrafficTwo, "#ff9800");
      setBackground(greenTrafficTwo, "rgb(71 69 66)");

      setBackground(redTrafficThree, "rgb(71 69 66)");
      setBackground(orangeTrafficThree, "rgb(71 69 66)");
      setBackground(greenTrafficThree, "green");
    }

    if (counter == 1) {
      //  First Traffic Lights

      setBackground(redTrafficOne, "rgb(71 69 66)");
      setBackground(orangeTrafficOne, "#ff9800");
      setBackground(greenTrafficOne, "rgb(71 69 66)");

      setBackground(redTrafficTwo, "rgb(71 69 66)");
      setBackground(orangeTrafficTwo, "rgb(71 69 66)");
      setBackground(greenTrafficTwo, "green");

      setBackground(redTrafficThree, "red");
      setBackground(orangeTrafficThree, "rgb(71 69 66)");
      setBackground(greenTrafficThree, "rgb(71 69 66)");
    }

    if (counter == 2) {
      //   Second Trafic Lights #ff9800

      setBackground(redTrafficOne, "rgb(71 69 66)");
      setBackground(orangeTrafficOne, "rgb(71 69 66)");
      setBackground(greenTrafficOne, "green");

      setBackground(redTrafficTwo, "red");
      setBackground(orangeTrafficTwo, "rgb(71 69 66)");
      setBackground(greenTrafficTwo, "rgb(71 69 66)");

      setBackground(redTrafficThree, "rgb(71 69 66)");
      setBackground(orangeTrafficThree, "#ff9800");
      setBackground(greenTrafficThree, "rgb(71 69 66)");
    }
    counter++;
  }, 2000);
};

getAllTraffic();
