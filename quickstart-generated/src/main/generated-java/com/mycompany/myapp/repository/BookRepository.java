/*
 * Project home: https://github.com/jaxio/celerio-angular-quickstart
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Source code: https://github.com/jaxio/celerio/
 * Follow us on twitter: @jaxiosoft
 * This header can be customized in Celerio conf...
 * Template pack-angular:src/main/java/repository/EntityRepository.java.e.vm
 */
package com.mycompany.myapp.repository;

import java.util.List;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.*;

import com.mycompany.myapp.domain.Book;
import com.mycompany.myapp.domain.Book_;

public interface BookRepository extends JpaRepository<Book, Integer> {

    default List<Book> complete(String query, int maxResults) {
        Book probe = new Book();
        probe.setTitle(query);

        ExampleMatcher matcher = ExampleMatcher.matching() //
                .withMatcher(Book_.title.getName(), match -> match.ignoreCase().startsWith());

        Page<Book> page = findAll(Example.of(probe, matcher), new PageRequest(0, maxResults));
        return page.getContent();
    }
}