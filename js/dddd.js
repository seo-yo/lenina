(function (i, s, o, g, r) {
  var a = s.createElement(o);
  var m = s.getElementsByTagName(o)[0];
  a.src = g;
  a.onload = function () {
    if (i[r].init) {
      i[r].init(
        "https://js-error-tracer-api.cafe24.com",
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsZW5pbmEuY2FmZTI0LmNvbSIsImF1ZCI6ImpzLWVycm9yLXRyYWNlci1hcGkuY2FmZTI0LmNvbSIsIm1hbGxfaWQiOiJsZW5pbmEiLCJzaG9wX25vIjoxLCJwYXRoX3JvbGUiOiJNQUlOIiwibGFuZ3VhZ2VfY29kZSI6ImtvX0tSIiwiY291bnRyeV9jb2RlIjoiS1IiLCJpc195dHMiOmZhbHNlLCJpc19jb250YWluZXIiOmZhbHNlfQ.rt26Vk8SdVGspNzziPD9IgP2R1lPJZFRJpSrzMYOKIU",
        {
          errors: {
            path: "/api/v1/store",
            collectWindowErrors: true,
            preventDuplicateReports: true,
            storageKeyPrefix: "EC_JET.MAIN",
            samplingEnabled: true,
            samplingRate: 0.5,
          },
          vitals: { path: "/api/v1/vitals", samplingEnabled: true, samplingRate: 0.3 },
          resources: { path: "/api/v1/resources", samplingEnabled: true, samplingRate: 0.5, durationThreshold: 3000 },
        }
      );
    }
  };
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "//optimizer.poxo.com/jet/jet.js", "EC_JET");
