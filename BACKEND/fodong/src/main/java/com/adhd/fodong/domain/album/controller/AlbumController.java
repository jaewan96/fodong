package com.adhd.fodong.domain.album.controller;

import com.adhd.fodong.domain.album.entity.RecordingEntity;
import com.adhd.fodong.domain.album.service.AlbumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/album")
public class AlbumController {

    private final AlbumService albumService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{profileId}")
    public List<RecordingEntity> getRecordings(@PathVariable int profileId) {
        List<RecordingEntity> recordings = albumService.getRecordings(profileId);
        return recordings;
    }
}
