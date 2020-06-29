function includeHTML(url, elementId, callback) {
  const element = document.getElementById(elementId);
  fetch(url)
    .then(data => data.text())
    .then(text => {
      element.innerHTML = text;
      if (callback) {
        callback();
      }
    })
    .catch(error => {
      element.innerHTML = "Error: " + error;
    });
}
