package ru.home.model;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

@Repository
public interface PartRepository extends JpaRepository<Part, Long> {
    Page<Part> findAllByNameIgnoreCaseStartingWithAndIsCompulsory(Pageable pageable, @Nullable String name, @Nullable Boolean IsCompulsory);
    Page<Part> findAllByNameIgnoreCaseStartingWith(Pageable pageable, @Nullable String name);
    Page<Part> findAllByIsCompulsory(Pageable pageable, @Nullable Boolean IsCompulsory);
}
