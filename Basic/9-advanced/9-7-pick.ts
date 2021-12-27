{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    //Pick을 사용하면 원하는 정보만 골라서 볼 수 있다
    type VideoMetadata = Pick<Video,'id' | 'title'>

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