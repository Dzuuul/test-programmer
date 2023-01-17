package com.tes.transaksi.repository;

import com.tes.transaksi.model.Penjualan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PenjualanRepository extends JpaRepository<Penjualan, Integer> {

}
