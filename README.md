# Metadata
> Metadata for videos

## Install
```
yarn
```

## Start
```
yarn start
```

## Request:

```js
POST /metaData
{"url": "VIDEO_URL"}
```

## Response:

```js
{
    "audio": [
        {
            "bitRate": 123127,
            "channelLayout": "stereo",
            "channels": 2,
            "sampleRate": 44100
        }
    ],
    "video": [
        {
            "bitRate": 919527,
            "frameRate": 24,
            "resolution": {
                "height": 293,
                "width": 720
            }
        }
    ],
    "bitrate": 1048021,
    "duration": 31958.333
}
```
