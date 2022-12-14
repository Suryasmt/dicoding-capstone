import React from 'react'
import fototrimester from '../../assets/trimester1.jpg'
import fisiktrimester123 from '../../assets/perubahan-tubuh-trimester-123.jpg'
import emosiBumil from '../../assets/perubahan-emosi-ibu.jpeg'
import bumilHindari from '../../assets/hal-yg-perlu-dihindari-bumil.jpg'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation/Navigation'

const TRIMESTER_DUA = () => {
  return (
    <>
      <Navigation />
      <div className='box-content-trimester'>
        <div className='about-trimester'>
        <div className='about-title-trimester'>
          <h1>Trimester 2</h1>
          <p>Trimester kedua kehamilan merupakan periode yang terjadi pada minggu ke 13-28 kehamilan. Pada trimester ini, organ vital bayi seperti jantung, paru-paru, ginjal, dan otak sudah lebih berkembang, sehingga ukurannya menjadi lebih besar. Bayi juga mulai bisa mendengar suara dan menelan.</p>
          <p>Rambut-rambut kecil bayi akan mulai tumbuh dan tubuhnya juga sudah bisa melakukan gerakan-gerakan kecil. Pada awal trimester kedua, berat bayi sudah mencapai 1,5 ons. Jika dibandingkan dengan trimester pertama, ibu hamil akan memiliki lebih banyak energi di trimester kedua ini. Gejala kehamilan yang tidak nyaman pun juga mulai berkurang, sehingga trimester kedua dianggap sebagai periode kehamilan yang paling nyaman.</p>
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
              <h4>Perubahan Tubuh Ibu Hamil Saat Trimester Kedua</h4>
              <p>Memasuki trimester kedua kehamilan, gejala mual dan lelah yang sering terjadi pada trimester pertama mulai menghilang. Ada beberapa perubahan fisik lain pada trimester kedua, yaitu:</p>
              <ul>
                <li>Perut dan payudara membesar</li>
                <p>Saat rahim mulai mengembang untuk memberi ruang bagi bayi, perut akan tumbuh. Payudara juga secara bertahap akan terus bertambah besar. </p>
                <li>Kontraksi Braxton Hicks</li>
                <p>Kontraksi ini alami dan dapat terjadi secara tidak teratur pada sore atau malam hari, setelah aktivitas fisik atau setelah berhubungan seks. Namun, jika kontraksi menjadi teratur dan semakin kuat, segeralah memeriksakan diri ke dokter. Sebab, kondisi tersebut dapat menjadi tanda persalinan prematur.</p>
                <li>Perubahan kulit</li>
                <p>Perubahan hormon selama kehamilan merangsang peningkatan sel pigmen (melanin) di kulit. Akibatnya, ibu mungkin melihat bercak coklat di wajah (melasma). Selain itu, ibu juga mungkin melihat garis gelap di perut (linea nigra).</p>
                <p>Perubahan kulit ini biasa terjadi dan biasanya memudar setelah melahirkan. Meski begitu, paparan sinar matahari, dapat memperburuk masalah ini. Oleh karena itu, pastikan untuk menggunakan tabir surya ketika berada di luar ruangan.</p>
                <li>Masalah hidung</li>
                <p>Selama kehamilan, kadar hormon meningkat dan tubuh akan membuat lebih banyak darah. Hal ini dapat menyebabkan selaput lendir membengkak dan mudah berdarah, mengakibatkan hidung tersumbat dan mimisan. Kondisi ini dapat diredakan dengan tetes saline agar hidung tidak tersumbat. </p>
                <li>Masalah gigi</li>
                <p>Kehamilan dapat menyebabkan gusi menjadi lebih sensitif terhadap flossing dan menyikat gigi, yang dapat mengakibatkan pendarahan ringan. </p>
                <li>Pusing</li>
                <p>Kehamilan menyebabkan perubahan sirkulasi yang mungkin membuat ibu pusing. </p>
                <li>Kram kaki</li>
                <p>Kram kaki biasa terjadi saat kehamilan berlanjut, sering menyerang di malam hari. Untuk mencegahnya, regangkan otot betis sebelum tidur, tetap aktif secara fisik, dan minum banyak cairan.</p>
                <li>Keputihan</li>
                <p>Kondisi ini normal, tetapi jika keputihan menjadi berbau kuat, warnanya tidak biasa, dan disertai rasa sakit, nyeri atau gatal segeralah memeriksakan diri ke dokter. </p>
                <li>Infeksi saluran kemih</li>
                <p>Infeksi ini umum terjadi selama kehamilan. Namun, jika ibu sulit menahan BAK, atau merasakan nyeri saat buang air, segeralah memeriksakan diri ke dokter. </p>
              </ul>
            </div>
          </div>

          <div className='card-desc-trimester'>
            <div className='decs-trimester-2'>
              <div className='makanan-bumil'>
                <img src={emosiBumil} alt="perubahan emosi" />
              </div>
              <h4>Perubahan Emosional saat Trimester Kedua</h4>
              <p>Kehamilan bisa menjadi waktu yang menyenangkan. Namun, penting juga untuk merasakan kecemasan yang meningkat atau suasana hati yang rendah yang rentan muncul. Terkadang salah satu atau kedua orang tua mengalami emosi yang sulit selama kehamilan. Hal ini dapat dipicu oleh perasaan khawatir tentang persalinan atau tentang bagaimana berperan sebagai orang tua.</p>
              <p>Perasaan cemas rentan terjadi, dan beberapa wanita hamil berisiko mengalami gejala kondisi yang disebut gangguan kecemasan. Selain itu, ada juga risiko depresi antenatal, yaitu gangguan suasana hati yang mencakup perubahan emosional yang intens di luar yang mungkin  diharapkan selama kehamilan. </p>
                            
              <div className='fisik-trimester-1'>
                <img src={bumilHindari} alt="bumil hindari" />
              </div>
              <h4>Hal yang Perlu Dihindari Ibu Hamil saat Trimester Kedua</h4>
              <p>Saat usia kehamilan semakin menua, ibu hamil perlu menghindari beberapa aktivitas yang bisa memberi dampak merugikan bagi kesehatan ibu dan bayi. Berikut hal-hal yang sebaiknya dihindari ibu hamil saat memasuki trimester kedua kehamilan:</p>
              <ul>
                <li>Olahraga berat atau latihan kekuatan yang bisa menyebabkan cedera pada perut.</li>
                <li>Batasi konsumsi kafein dan alkohol.</li>
                <li>Kebiasaan minum obat sembarangan alias tanpa anjuran dokter.</li>
                <li>Konsumsi ikan mentah dan makanan laut bermerkuri tinggi (seperti ikan todak, makarel, dan kakap putih).</li>
                <li>Minum susu yang tidak dipasteurisasi atau produk susu lainnya.</li>
                <li>Konsumsi daging yang diawetkan.</li>
              </ul>

              <h4>Hal yang Perlu Dilakukan Ibu Hamil saat Trimester Kedua</h4>
                <p>Selain memenuhi kebutuhan nutrisi dengan baik, selama trimester kedua ibu hamil juga dianjurkan untuk berolahraga secara teratur. Ibu dapat melakukan latihan kegel, yaitu latihan dasar panggul. Hal yang perlu diperhatikan lainnya adalah menjaga kesehatan gigi dan gusi. Sebab, kebersihan gigi yang buruk dapat meningkatkan risiko persalinan prematur.</p>
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
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-14-minggu' target="_blank" rel="noreferrer"><h4>14</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-15-minggu' target="_blank" rel="noreferrer"><h4>15</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-16-minggu' target="_blank" rel="noreferrer"><h4>16</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-17-minggu' target="_blank" rel="noreferrer"><h4>17</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-18-minggu' target="_blank" rel="noreferrer"><h4>18</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-19-minggu' target="_blank" rel="noreferrer"><h4>19</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-20-minggu' target="_blank" rel="noreferrer"><h4>20</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-21-minggu' target="_blank" rel="noreferrer"><h4>21</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-22-minggu' target="_blank" rel="noreferrer"><h4>22</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-23-minggu' target="_blank" rel="noreferrer"><h4>23</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-24-minggu' target="_blank" rel="noreferrer"><h4>24</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-25-minggu' target="_blank" rel="noreferrer"><h4>25</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-26-minggu' target="_blank" rel="noreferrer"><h4>26</h4></a>
        </div>
        </div>

        <div className='text-trimester1'>
          <p>Trimester 2</p>
        </div>

      </div>
      </div>
      <Footer />
    </>
  )
}

export default TRIMESTER_DUA
