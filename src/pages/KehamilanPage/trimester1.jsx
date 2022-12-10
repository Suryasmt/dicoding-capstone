import React from 'react'
import fototrimester from '../../assets/trimester1.jpg'
import fisiktrimester123 from '../../assets/perubahan-tubuh-trimester-123.jpg'
import makananbumil from '../../assets/10-makanan-bumil.jpg'
import bumilHindari from '../../assets/hal-yg-perlu-dihindari-bumil.jpg'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

const TRIMESTER_SATU = () => {
  return (
    <>
      <Navigation />
      <div className='box-content-trimester'>
        <div className='about-trimester'>
          <div className='about-title-trimester'>
            <h1>Trimester 1</h1>
            <p>Trimester 1 kehamilan dimulai pada Hari Pertama Haid Terakhir (HPHT) dan berlangsung hingga akhir minggu ke-12. Pada trimester ini, sebagian besar ibu hamil mengalami morning sickness alias mual yang terjadi berulang. Apabila setelah melakukan hubungan intim, wanita tidak mengalami menstruasi hingga lebih dari satu minggu, jangan ragu untuk berdiskusi dengan dokter kandungan.</p>
            <p>Sebab,terlambat menstruasi bisa menjadi tanda awal kehamilan. Apalagi jika disertai dengan gejala fisik lain, seperti perubahan suasana hati, terasa kram di bawah perut, frekuensi buang air kecil meningkat, terjadi perubahan pada payudara, mengalami sakit kepala, sembelit, dan perdarahan.</p>
          </div>
          <div className='foto-trimester'>
            <img src={fototrimester} alt="foto trimester" />
          </div>
        </div>

        <div className='container-card-trimester'>
          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              <div className='fisik-trimester-1'>
                <img src={fisiktrimester123} alt="fisik trimester1" />
              </div>
              <h4>Perubahan Fisik Ibu Hamil saat Trimester Pertama</h4>
              <p>meski baru trimester pertama, ibu hamil akan mengalami sejumlah perubahan pada tubuh, antara lain:</p>
              <ul>
                <li>Nyeri Payudara</li>
                <p>Perubahan pada payudara menjadi tanda awal kehamilan. Biasanya, payudara akan terasa lebih lembut, nyeri dan sensitif, sehingga terasa sakit saat disentuh.</p>

                <li>Ukuran Perut Membesar</li>
                <p>Beberapa ibu hamil sudah bisa melihat perubahan ukuran perut pada trimester pertama kehamilan, meski sebagian yang lain belum.</p>

                <li>Perubahan Kulit</li>
                <p>Kulit ibu hamil biasanya akan terlihat lebih bercahaya. Kondisi ini dipengaruhi oleh perubahan hormon kehamilan dan peningkatan sirkulasi darah di bawah kulit. Selain itu, hormon kehamilan juga merangsang produksi minyak, sehingga kulit menjadi lebih lembap. Itu sebabnya beberapa ibu hamil rentan berjerawat.</p>
                <p>Perubahan kulit lainnya yang rentan dialami ibu hamil di trimester 1 adalah muncul stretch mark di area paha, pantat, perut, dan bawah dada. Lalu, garis gelap yang disebut linea nigra juga bisa muncul, membentang mulai dari pusar sampai ke rambut kemaluan. Wajah ibu hamil juga cenderung menjadi kusam karena bercak berwarna lebih gelap pada kulit (melasma) berpotensi muncul di pipi, dahi, dan hidung.</p>

                <li>Pembuluh Darah Vena Terlihat</li>
                <p>Perubahan ini terjadi akibat peningkatan volume darah, sehingga jantung memompa darah lebih cepat untuk memenuhi kebutuhan selama kehamilan.</p>

                <li>Perubahan Vagina</li>
                <p>Lapisan vagina menjadi lebih tebal dan kurang sensitif. Beberapa ibu hamil mungkin mengalami keputihan dan perdarahan ringan. Bercak darah pada awal kehamilan menandakan bahwa sel telur yang sudah dibuahi sperma berhasil menempel dalam dinding rahim. Jika perdarahan lebih berat dan disertai perut kram, segera lakukan pemeriksaan ke dokter kandungan terdekat.</p>

                <li>Perubahan Berat Badan</li>
                <p>Pada trimester pertama kehamilan, ibu akan mengalami peningkatan berat badan sebanyak 1,5-3 kilogram. Pertambahan ini menyesuaikan berat badan sebelum hamil.</p>
              </ul>
            </div>
          </div>

          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              <div className='makanan-bumil'>
                <img src={makananbumil} alt="makanan bumil" />
              </div>
              <h4>Kebutuhan Nutrisi Trimester Pertama Kehamilan</h4>
              <p>Penting bagi ibu hamil untuk memenuhi kebutuhan nutrisi janin pada trimester 1. Sebab, pada masa inilah janin tumbuh lebih cepat dari waktu-waktu lainnya. Berikut nutrisi yang harus dipenuhi selama trimester pertama kehamilan:</p>
              <ul>
                <li>Asam folat</li>
                <p>Untuk mendukung perkembangan otak dan sumsum tulang bayi. Nutrisi ini bisa diperoleh dari sayuran hijau (seperti bayam, brokoli, dan kale), buah jeruk, serta kacang-kacangan. Suplemen asam folat juga bisa dikonsumsi untuk memenuhi kebutuhan ibu hamil.</p>

                <li>Protein</li>
                <p>Asupan protein membentuk sel-sel baru pada janin. Nutrisi ini bisa diperoleh dari telur, tahu, tempe, ikan, ayam, daging, kacang-kacangan, susu, dan produk olahan susu lainnya. Sebaiknya, konsumsi makanan sumber protein sebanyak 2-3 porsi per hari.</p>

                <li>Vitamin A</li>
                <p>Pendukung perkembangan mata dan sistem kekebalan tubuh janin yang bisa didapat dari konsumsi buah dan sayuran.</p>

                <li>Kalsium dan vitamin D</li>
                <p>Membantu pertumbuhan tulang dan gigi janin. Kalsium juga berfungsi membantu melancarkan peredaran darah serta kerja sistem otot dan saraf janin. Nutrisi ini bisa diperoleh dengan konsumsi brokoli, kale, ikan (seperti teri, sarden, dan salmon), serta susu dan produk olahannya.</p>

                <li>Zat besi</li>
                <p>Membangun hemoglobin yang berfungsi mengedarkan oksigen ke seluruh tubuh ibu hamil dan janin. Nutrisi ini bisa diperoleh dari daging merah tanpa lemak, ayam, ikan, sayuran hijau (seperti bayam, brokoli), dan kacang-kacangan.</p>
              </ul>
            </div>
          </div>
        </div>

      {/* container ke 2 */}
        <div className='container-2-card-trimester'>
          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
            <div className='fisik-trimester-1'>
                <img src={bumilHindari} alt="bumil hindari" />
              </div>
              <h4>Hal yang Perlu Dihindari Ibu Hamil saat Trimester Pertama</h4>
              <p>Selain memenuhi asupan nutrisi yang dibutuhkan, ibu hamil juga perlu mengetahui apa saja pantangan yang sebaiknya dihindari selama trimester pertama kehamilan. Berikut beberapa di antaranya:</p>
              <ul>
                <li>Batasi konsumsi kafein dan alkohol.</li>
                <li>Hindari merokok.</li>
                <li>Tidak mengonsumsi obat tanpa anjuran dokter.</li>
                <li>Tidak mengonsumsi ikan mentah maupun makanan laut dengan kandungan merkuri tinggi (seperti ikan todak, makarel, dan kakap putih).</li>
                <li>Menghindari konsumsi susu yang tidak dipasteurisasi atau produk susu lainnya.</li>
                <li>Menghindari konsumsi daging yang diawetkan.</li>
              </ul>
            </div>
          </div>

          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              {/* <div className='makanan-bumil'>
                <img src={makananbumil} alt="makanan bumil" />
              </div> */}
              <h4>Masalah Kesehatan yang Rentan Terjadi di Trimester Pertama</h4>
              <p>Seiring dengan perubahan pada kondisi fisik dan mental ibu, tubuh rentan mengalami sejumlah masalah kesehatan, di antaranya:</p>
              <ul>
                <li>Anemia</li>
                  <p>Anemia atau kurang darah umum dialami oleh ibu hamil. Sebab, tubuh ibu akan memproduksi lebih banyak darah yang dialirkan pada janin saat hamil. Kekurangan darah bukan hanya membahayakan ibu, tetapi juga janin dalam kandungan. Hal ini dapat memicu kelahiran prematur, bahkan kematian. Anemia pada ibu hamil ditandai dengan beberapa gejala, seperti mudah merasa lemas, sesak napas, dan wajah pucat. Guna menghindari masalah kesehatan ini, ibu hamil perlu membiasakan pola makan sehat dengan mengonsumsi makanan tinggi zat besi, seperti ikan, ayam, daging, serta kacang-kacangan.</p>
                <li>Hiperemesis Gravidarum</li>
                  <p>Hiperemesis gravidarum adalah masalah kesehatan yang rentan dialami oleh ibu hamil trimester pertama. Gejalanya berupa mual dan muntah yang berlangsung terus-menerus. Namun, apabila mual dan muntah terjadi terus-menerus sehingga ibu menunjukkan gejala dehidrasi, segera dapatkan penanganan di rumah sakit terdekat. </p>
                <li>Sembelit</li>
                  <p>Konstipasi merupakan masalah yang dialami oleh sekitar 70 persen ibu hamil. Penyebabnya yaitu pergerakan usus yang menjadi lebih lambat dari biasanya saat hamil.</p>
              </ul>
            </div>
          </div>

          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              {/* <div className='makanan-bumil'>
                <img src={makananbumil} alt="makanan bumil" />
              </div> */}
              <h4>Cara Menjaga Kehamilan di Trimester Pertama</h4>
              <p>Agar kondisi ibu dan janin tetap sehat selama kehamilan, coba lakukan beberapa hal berikut ini.</p>
              <ul>
                <li>Perbanyak Asupan Air Putih</li>
                  <p>Umumnya, ibu hamil perlu mengonsumsi air putih sebanyak 8-10 gelas dalam satu hari, bahkan bisa lebih. Ini disebabkan karena tubuh memerlukan cairan lebih banyak saat hamil untuk membantu pertumbuhan dan perkembangan bayi dalam kandungan.</p>
                <li>Cukup Istirahat</li>
                  <p>Jangan lupa untuk memenuhi kebutuhan istirahat selama kehamilan, terlebih di semester pertama. Sebab, perubahan tubuh dan mental ibu turut memberikan pengaruh terhadap waktu istirahat. Saat menjalani kehamilan di trimester pertama, ibu perlu memenuhi waktu istirahat yang sesuai dengan kebutuhan dan tambahan istirahat pada siang atau sore hari.</p>
                <li>Rutin Olahraga</li>
                  <p>Meski sedang hamil, sebaiknya ibu tidak lupa untuk tetap rutin berolahraga. Namun, perlu diingat bahwa jenis olahraga yang bisa dilakukan tidak sembarangan, begitu pula durasinya.</p>
                <li>Menghindari Stres</li>
                  <p>Stres tidak hanya berdampak negatif untuk kesehatan ibu, tetapi juga perkembangan kehamilan. Bahkan, stres yang tidak ditangani bisa membuat ibu hamil mengalami keguguran.</p>
              </ul>
            </div>
          </div>
        </div>

        <div className='card-trimester-mingguan'>
          <div className='judul-perkembangan-janin'>
            <h2>Perkembangan janin dari minggu ke minggu</h2>
          </div>
          <div className='container-card-mingguan'>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-1-minggu' target="_blank" rel="noreferrer"><h4>1</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-2-minggu' target="_blank" rel="noreferrer"><h4>2</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-3-minggu' target="_blank" rel="noreferrer"><h4>3</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-4-minggu' target="_blank" rel="noreferrer"><h4>4</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-5-minggu' target="_blank" rel="noreferrer"><h4>5</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-6-minggu' target="_blank" rel="noreferrer"><h4>6</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-7-minggu' target="_blank" rel="noreferrer"><h4>7</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-8-minggu' target="_blank" rel="noreferrer"><h4>8</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-9-minggu' target="_blank" rel="noreferrer"><h4>9</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-10-minggu' target="_blank" rel="noreferrer"><h4>10</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-11-minggu' target="_blank" rel="noreferrer"><h4>11</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-12-minggu' target="_blank" rel="noreferrer"><h4>12</h4></a>
            </div>
            <div className='card-mingguan'>
              <p>Minggu</p>
              <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-13-minggu' target="_blank" rel="noreferrer"><h4>13</h4></a>
            </div>
          </div>

          <div className='text-trimester1'>
            <p>Trimester 1</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default TRIMESTER_SATU
