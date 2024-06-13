"use client";

const setCookie = (tokens) => {
  try {
    document.cookie = `accessToken = ${tokens.accessToken} ;max-age= ${
      15 * 60
    } ;path=${`/`}`;
    document.cookie = `refreshToken = ${tokens.refreshToken} ;max-age= ${
      30 * 24 * 60 * 60
    } ;path=${`/`}`;
  } catch (error) {
    console.log("🚀 ~ setCookie ~ error:", error);
  }
};

function getCookie(key) {
  try {
    var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    return keyValue ? keyValue[2] : null;
  } catch (error) {
    console.log("🚀 ~ getCookie ~ error:", error);
  }
}

function deleteCookie(key) {
  try {
    document.cookie = `accessToken ="" ;max-age=0`;
    document.cookie = `refreshToken ="" ;max-age=0`;
  } catch (error) {
    console.log("🚀 ~ deleteCookie ~ error:", error);
  }
}


export { setCookie, getCookie, deleteCookie};
