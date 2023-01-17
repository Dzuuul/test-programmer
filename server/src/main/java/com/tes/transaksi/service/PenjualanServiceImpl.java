package com.tes.transaksi.service;

import com.tes.transaksi.model.Penjualan;
import com.tes.transaksi.repository.PenjualanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PenjualanServiceImpl implements PenjualanService{
    @Autowired
    private PenjualanRepository penjualanRepository;
    @Override
    public Penjualan savePenjualan(Penjualan penjualan) {
        return penjualanRepository.save(penjualan);
    }

    @Override
    public List<Penjualan> getAllPenjualan() {
        return penjualanRepository.findAll();
    }

    @Override
    public Penjualan getPenjualanById(Long id) {
        Optional<Penjualan> optionalPenjualan = penjualanRepository.findById(Math.toIntExact(id));
        return optionalPenjualan.orElse(null);
    }

}
