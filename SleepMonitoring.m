vid = VideoReader("Video/sleep.mp4");
vidDt=read(vid,[1 vid.NumFrames]);
numImgs = get(vid, 'NumFrames');
s=1;
cr = zeros(1, numImgs);
selected = zeros(1, numImgs);
i=1;
while i<numImgs-18
    Curr_frame = rgb2gray(squeeze(vidDt(:,:,:,i)));
    N_frame = rgb2gray(squeeze(vidDt(:,:,:,i+17)));
    CR=corr2(Curr_frame,N_frame); 
    cr(i)=CR;
    framenum(i)=i;
    i=i+17;
    if CR<0.8
        selected(s)=i;
        s=s+1;
    end 
end

x=1:numImgs;
y=cr;

plot(x,y);
ylim([0.9,1]);

for j=1:numImgs-1
    a_frame = rgb2gray(squeeze(vidDt(:,:,:,j)));
    b_frame = rgb2gray(squeeze(vidDt(:,:,:,j+1)));
    c_diff=a_frame-b_frame;
    D=sum(c_diff,'all');
    avgdifference(j)=D/(720*1280);
end
x=1:numImgs-1;
y=avgdifference;

plot(x,y);
ylim([0,5]);


%RefImage = rgb2gray(imread('pathToFile'));
totalNumFrames = numImgs;
thresholdParam = 0.1;%how sensitive you want the model to be to changes in pixel values/luminosity.
for k = (1:totalNumFrames-1)
    ref_frame = rgb2gray(squeeze(vidDt(:,:,:,k)));
    curr_frame = rgb2gray(squeeze(vidDt(:,:,:,k+1)));
    %curFrame %get the currentFrame
    mask = curr_frame - ref_frame; % this is your 'c' matrix/variable
    binarisedMask =  imbinarize(mask, thresholdParam);%This matrix has the value 1 wherever the curFrame
                  %differs from refFrame and staisfies thresholdParam
                  %constraint. Thus motion detection is captured by this
                  %matrix
    imshow(binarisedMask);
end