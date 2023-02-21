package com.tes.transaksi.service;

import com.tes.transaksi.model.MasterBarang;
import com.tes.transaksi.repository.MasterBarangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public MasterBarang getMasterBarangById(Long id) {
        Optional<MasterBarang> optionalMasterBarang = masterBarangRepository.findById(Math.toIntExact(id));
        return optionalMasterBarang.orElse(null);
    };

    @Override
    public void deleteMasterBarangById(Long id) {
        masterBarangRepository.deleteById(Math.toIntExact(id));
    }
}
