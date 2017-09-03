
function skipYTAd() {
  /* Skippes big video */
  var bigAdSkipButton_arr = document.getElementsByClassName("videoAdUiSkipButtonExperimentalText videoAdUiFixedPaddingSkipButtonText");
  if (bigAdSkipButton_arr.length !== 0) {
    var bigAdSkipButton = bigAdSkipButton_arr[0];
    bigAdSkipButton.click();
    console.log("skipYTAd()::bigAdSkipButton.click()")

  }

  /* Skippes small advertisement */
  var smallAdCloseButton_container = document.getElementsByClassName("close-padding");
  if (smallAdCloseButton_container.length !== 0) {
    var smallAdCloseButton_button = smallAdCloseButton_container[0].getElementsByClassName("close-button")[0];
    console.log(smallAdCloseButton_button);
    smallAdCloseButton_button.click();
    console.log("skipYTAd()::smallAdCloseButton_button.click()");
  }

  console.log("2 sec");
}
setInterval(skipYTAd, 2000);

