BrowserFS.configure({
    fs: "MountableFileSystem",
    options: {
      "/tmp": { fs: "InMemory" },
      "/": { fs: "IndexedDB" }
    }
  }, function(e) {
    if (e) {
      // An error occurred.
      throw e;
    }
    // Otherwise, BrowserFS is ready to use!
  });
});