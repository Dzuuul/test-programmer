package com.tes.transaksi.service;

import com.tes.transaksi.model.MasterBarang;
import com.tes.transaksi.repository.MasterBarangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MasterBarangServiceImpl implements MasterBarangService {

    @Autowired
    private MasterBarangRepository masterBarangRepository;
    @Override
    public MasterBarang saveMasterBarang(MasterBarang masterBarang) {
        return masterBarangRepository.save(masterBarang);
    }

    @Override
    public List<MasterBarang> getAllBarang() {
        return masterBarangRepository.findAll();
    }
}
