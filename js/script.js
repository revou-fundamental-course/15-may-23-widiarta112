document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var sideLength = parseFloat(document.getElementById("sideLength").value);
    var formula = document.getElementById("formula");
    var result = document.getElementById("result");
  
    if (isNaN(sideLength) || sideLength <= 0) {
      result.textContent = "Masukkan panjang sisi yang valid.";
      formula.textContent = ""; // Menghapus teks rumus saat hasil tidak valid
    } else {
      var selectedOption = document.querySelector('input[name="pilih"]:checked');
      if (selectedOption === null) {
        result.textContent = "Pilih opsi perhitungan (Luas atau Keliling).";
        formula.textContent = ""; // Menghapus teks rumus saat opsi tidak dipilih
      } else {
        var calculationType = selectedOption.value;
        var calculationResult;
        var formulaText;
  
        if (calculationType === "luas") {
          calculationResult = sideLength * sideLength;
          formulaText = "Rumus Luas:\n" + // Baris pertama
                  "sisi × sisi"; 
          result.textContent = "Luas: " + calculationResult;
        } else if (calculationType === "keliling") {
          calculationResult = 4 * sideLength;
          formulaText = "Rumus Keliling:\n" + // Baris pertama
                  "4 × sisi";   
          result.textContent = "Keliling: " + calculationResult;
        }
  
        // formula.textContent = formulaText; // Menampilkan teks rumus
        document.getElementById('formula').textContent = formulaText;
      }
    }
  });