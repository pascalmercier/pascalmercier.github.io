function backDomainAware() {
  if(window.history.length > 1 && document.referrer.indexOf(window.location.host) !== -1) {
    window.history.back();
  }
  else {
    window.location.href = '/';
  }
  return false;
}
