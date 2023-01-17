package com.tes.transaksi.repository;

import com.tes.transaksi.model.MasterBarang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MasterBarangRepository extends JpaRepository<MasterBarang, Integer> {

}
