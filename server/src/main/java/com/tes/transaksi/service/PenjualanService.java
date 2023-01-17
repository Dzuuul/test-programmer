package com.tes.transaksi.service;

import com.tes.transaksi.model.Penjualan;

import java.util.List;

public interface PenjualanService {
    public Penjualan savePenjualan(Penjualan penjualan);
    public List<Penjualan> getAllPenjualan();
    public Penjualan getPenjualanById(Long id);

}
