 function downloadFile02() {
      const combinedContent02 = document.getElementById('combinedContent02').value;
      const blob = new Blob([combinedContent02], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const downloadLink02 = document.getElementById('downloadLink02');
      downloadLink02.href = url;
    }