{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    //Pick과 반대로 원하는 정보를 제외한 나머지를 볼 수 있다
    type VideoMetadata = Omit<Video,'url' | 'data'>

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..',
        };
    }

    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id: id,
            title: 'title',
        };
    }
}