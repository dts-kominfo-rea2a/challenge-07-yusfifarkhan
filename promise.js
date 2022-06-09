const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    /* Await hasil await promisenya */

    const hasilIXX = await promiseTheaterIXX();
    const hasilVGC = await promiseTheaterVGC();

    /* End hasil await promisenya */

    /* Hasil filter berdasarkan param emosi */

    const hasilFilterEmosiIXX = hasilIXX.filter(
      (judulFilm) => judulFilm.hasil === emosi
    );

    const hasilFilterEmosiVGC = hasilVGC.filter(
      (judulFilm) => judulFilm.hasil === emosi
    );

    /* End Filter hasil promisenya */

    /* Mengembalikan resut hasil promisenya */

    return hasilFilterEmosiIXX.length + hasilFilterEmosiVGC.length;

    /* End Mengembalikan resut hasil promisenya */
  } catch (error) {
    return `Ada error di ${error}`;
  }
};

module.exports = {
  promiseOutput,
};
