export const userFileViewer = async (id) => {
    let result = await axios
      .get(BASE_URL + `v1/Common/file-by-key?Key=${id}`, {
        responseType: "blob",
      })
      .then((response) => {
        let type = "";
        if (id?.includes("pdf")) {
          type = "application/pdf";
        } else {
          type = "image/png, image/gif, image/jpeg";
        }
        const file = new Blob([response.data], { type: type });
        const fileURL = URL.createObjectURL(file);
        const pdfWindow = window.open();
        pdfWindow.location.href = fileURL;
      });
  };