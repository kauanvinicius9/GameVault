package br.com.gamevault.dto;

public record GameRequestDTO (
    String title,
    String genre,
    String platform,
    String rating
 ) {}