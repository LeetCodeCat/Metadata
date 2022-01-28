import util from 'util';
import {exec} from 'child_process';
import {CustomError} from "../utilities/CustomError";
import {Iffprobe} from "../types";

const executeCommand = util.promisify(exec);

const ffprobe = async (requestUrl: string): Promise<Iffprobe> => {
    /* execute ffprobe command and retrieve the output */
    const command = "ffprobe -v quiet -print_format json -show_format -show_streams";
    try {
        const {stdout} = await executeCommand(`${command} ${requestUrl}`);
        return JSON.parse(stdout);
    } catch (e) {
        throw new CustomError("Video file location not found", 404);
    }
};

export default ffprobe;
