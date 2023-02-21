package com.tes.transaksi.model;

import jakarta.persistence.*;

import java.util.Calendar;
import java.util.Date;

@Entity
public class Penjualan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)

    private Long id;
    private String tglFaktur;
    private int noFaktur;
    private String namaKonsumen;
    private String kodeBarang;
    private int jumlah;
    private int hargaSatuan;
    private int hargaTotal;

    public Penjualan() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTglFaktur() {
        return tglFaktur;
    }

    public void setTglFaktur(String tglFaktur) {
        this.tglFaktur = tglFaktur;
    }

    public int getNoFaktur() {
        return noFaktur;
    }

    public void setNoFaktur(int noFaktur) {
        this.noFaktur = noFaktur;
    }

    public String getNamaKonsumen() {
        return namaKonsumen;
    }

    public void setNamaKonsumen(String namaKonsumen) {
        this.namaKonsumen = namaKonsumen;
    }

    public String getKodeBarang() {
        return kodeBarang;
    }

    public void setKodeBarang(String kodeBarang) {
        this.kodeBarang = kodeBarang;
    }

    public int getJumlah() {
        return jumlah;
    }

    public void setJumlah(int jumlah) {
        this.jumlah = jumlah;
    }

    public int getHargaSatuan() {
        return hargaSatuan;
    }

    public void setHargaSatuan(int hargaSatuan) {
        this.hargaSatuan = hargaSatuan;
    }

    public int getHargaTotal() {
        return hargaTotal;
    }

    public void setHargaTotal(int hargaTotal) {
        this.hargaTotal = hargaTotal;
    }
}
