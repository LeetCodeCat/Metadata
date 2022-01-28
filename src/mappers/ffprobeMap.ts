import { ffprobeDTO } from "../dtos/ffprobeDTO";
import {IaudioStream, Iffprobe, IvideoStream} from "../types";

/* map the results from ffprobe command */
export const toDTO = (ffprobe: Iffprobe): ffprobeDTO => {
    const streams = ffprobe.streams;
    const audioStream = streams.find(stream => stream.codec_type === "audio") as IaudioStream | undefined;
    const videoStream = streams.find(stream => stream.codec_type === "video") as IvideoStream | undefined;

    return {
        audio: audioStream ? [{
            bitRate: parseInt(audioStream.bit_rate),
            channelLayout: audioStream.channel_layout,
            channels: audioStream.channels,
            sampleRate: parseInt(audioStream.sample_rate)
        }] : undefined,
        video: videoStream ? [{
            bitRate: parseInt(videoStream.bit_rate),
            frameRate: parseInt(videoStream.avg_frame_rate),
            resolution: {
                height: videoStream.height,
                width: videoStream.width
            }
        }] : undefined,
        bitrate: parseInt(ffprobe.format.bit_rate),
        duration: parseFloat(ffprobe.format.duration) * 1000
    }
}
