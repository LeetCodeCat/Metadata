export interface IvideoStream {
    codec_type: "video";
    width: number;
    height: number;
    avg_frame_rate: string;
    bit_rate: string;
}

export interface IaudioStream {
    codec_type: "audio";
    sample_rate: string;
    channels: number;
    channel_layout: string;
    bit_rate: string;
}

export interface Iffprobe {
    streams: [] | [IaudioStream] | [IvideoStream] | [IvideoStream, IaudioStream] | [IaudioStream, IvideoStream];
    format:
        {
            duration: string;
            bit_rate: string;
        }
}
