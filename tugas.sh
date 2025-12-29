
readonly HIJAU='\033[0;32m'
readonly MERAH='\033[0;31m'
readonly BIRU='\033[0;34m'
readonly KUNING='\033[1;33m'
readonly NETRAL='\033[0m'

declare -a riwayat_perhitungan=()

total_perhitungan=0 


proses_operasi() {
    local operator="$1"
    
    # Input dan Output
    echo -e "\n${BIRU}--- Operasi ${operator} ---${NETRAL}"
    read -rp "Masukkan Angka Pertama: " num1
    read -rp "Masukkan Angka Kedua: " num2

    if [[ "$operator" == "/" ]] && [[ "$num2" == 0 ]]; then
        echo -e "${MERAH}ERROR: Pembagian dengan nol tidak diizinkan!${NETRAL}"
        return 1
    fi
    
    
    hasil=$(echo "scale=2; $num1 $operator $num2" | bc)
    
    total_perhitungan=$((total_perhitungan + 1)) 
   

    riwayat_string="${num1} ${operator} ${num2} = ${hasil}"
    riwayat_perhitungan+=("$riwayat_string") 
    
    echo -e "${HIJAU}Hasil: ${riwayat_string}${NETRAL}"
}

tampilkan_riwayat() {
    echo -e "\n${KUNING}--- Riwayat Perhitungan (Total: ${total_perhitungan}) ---${NETRAL}"
    
    # Operator Perbandingan: Cek apakah Array kosong
    if [[ ${#riwayat_perhitungan[@]} -eq 0 ]]; then
        echo "Belum ada perhitungan yang tersimpan."
    else
        # Perulangan (Loop): Iterasi melalui Array
        for i in "${!riwayat_perhitungan[@]}"; do
            # Operator Aritmatika: Nomor urut
            nomor=$((i + 1)) 
            echo "${nomor}. ${riwayat_perhitungan[$i]}"
        done
    fi
}


# Fungsi 3: Fungsi bantu untuk jeda
tekan_enter_untuk_kembali() {
    echo ""
    read -rp "Tekan [Enter] untuk kembali ke menu..."
}


# Fungsi Utama: Fungsi 4 (Menu Utama & Perulangan)
kalkulator() {
    local pilihan
    
    while true; do # Perulangan (Loop) untuk menu
        clear
        echo -e "${BIRU}=======================================${NETRAL}"
        echo -e "${HIJAU}   🔢 KALKULATOR BASH SEDERHANA ${NETRAL}"
        echo -e "${BIRU}=======================================${NETRAL}"
        
        # List Pilihan (Sequensial)
        echo "1. Penjumlahan (+)"
        echo "2. Pengurangan (-)"
        echo "3. Perkalian (*)"
        echo "4. Pembagian (/)"
        echo "5. Lihat Riwayat Perhitungan"
        echo "0. Keluar"
        echo -e "${BIRU}=======================================${NETRAL}"
        
        # Input dari Pengguna
        read -rp "Pilih operasi (0-5): " pilihan
        
        # Kondisi (Case): Lanjut ke fungsi selanjutnya
        case $pilihan in
            1) proses_operasi "+" ;;
            2) proses_operasi "-" ;;
            3) proses_operasi "*" ;;
            4) proses_operasi "/" ;;
            5) tampilkan_riwayat ;;
            0)
                echo -e "${HIJAU}Terima kasih. Keluar dari kalkulator.${NETRAL}"
                break
                ;;
            *)
                echo -e "${MERAH}Pilihan tidak valid. Silakan coba lagi.${NETRAL}"
                ;;
        esac
        
        tekan_enter_untuk_kembali
    done
}

kalkulator
