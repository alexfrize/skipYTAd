(function () {
  function skipYTAd() {
    /* Skippes big video */
    var bigAdSkipButton_arr = document.getElementsByClassName("videoAdUiSkipButtonExperimentalText videoAdUiFixedPaddingSkipButtonText");
    if (bigAdSkipButton_arr.length !== 0) {
      var bigAdSkipButton = bigAdSkipButton_arr[0];
      bigAdSkipButton.click();
      console.log("skipYTAd()::bigAdSkipButton.click()")
    }

    var smallAdCloseButton_container = document.getElementsByClassName("close-padding condensed contains-svg");
    if (smallAdCloseButton_container.length !== 0) {
      smallAdCloseButton_container[0].click();
      console.log("skipYTAd()::smallAdCloseButton_container[0].click()");
    }

  }
  setInterval(skipYTAd, 2000);
  console.log("skipYTAd extention is running...");
})();