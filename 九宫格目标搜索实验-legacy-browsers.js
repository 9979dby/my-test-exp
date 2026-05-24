/****************** 
 * 九宫格目标搜索实验 *
 ******************/


// store info about the experiment session:
let expName = '九宫格目标搜索实验';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'loopTemplate1 - 副本.xlsx', 'path': 'loopTemplate1 - 副本.xlsx'},
    {'name': 'neutral/IMG_3209.jpg', 'path': 'neutral/IMG_3209.jpg'},
    {'name': 'neutral/IMG_3205.jpg', 'path': 'neutral/IMG_3205.jpg'},
    {'name': 'neutral/IMG_3202.jpg', 'path': 'neutral/IMG_3202.jpg'},
    {'name': 'neutral/IMG_3212.jpg', 'path': 'neutral/IMG_3212.jpg'},
    {'name': 'neutral/IMG_3216.jpg', 'path': 'neutral/IMG_3216.jpg'},
    {'name': 'neutral/IMG_3211.jpg', 'path': 'neutral/IMG_3211.jpg'},
    {'name': 'neutral/IMG_3221.jpg', 'path': 'neutral/IMG_3221.jpg'},
    {'name': 'neutral/IMG_3220.jpg', 'path': 'neutral/IMG_3220.jpg'},
    {'name': 'neutral/IMG_3206.jpg', 'path': 'neutral/IMG_3206.jpg'},
    {'name': 'neutral/IMG_3213.jpg', 'path': 'neutral/IMG_3213.jpg'},
    {'name': 'neutral/IMG_3219.jpg', 'path': 'neutral/IMG_3219.jpg'},
    {'name': 'neutral/IMG_3199.jpg', 'path': 'neutral/IMG_3199.jpg'},
    {'name': 'neutral/IMG_3215.jpg', 'path': 'neutral/IMG_3215.jpg'},
    {'name': 'neutral/IMG_3218.jpg', 'path': 'neutral/IMG_3218.jpg'},
    {'name': 'neutral/IMG_3222.jpg', 'path': 'neutral/IMG_3222.jpg'},
    {'name': 'neutral/IMG_3214.jpg', 'path': 'neutral/IMG_3214.jpg'},
    {'name': 'neutral/IMG_3200.jpg', 'path': 'neutral/IMG_3200.jpg'},
    {'name': 'neutral/IMG_3217.jpg', 'path': 'neutral/IMG_3217.jpg'},
    {'name': 'neutral/IMG_3204.jpg', 'path': 'neutral/IMG_3204.jpg'},
    {'name': 'neutral/IMG_3207.jpg', 'path': 'neutral/IMG_3207.jpg'},
    {'name': 'neutral/IMG_3210.jpg', 'path': 'neutral/IMG_3210.jpg'},
    {'name': 'neutral/IMG_3208.jpg', 'path': 'neutral/IMG_3208.jpg'},
    {'name': 'neutral/IMG_3203.jpg', 'path': 'neutral/IMG_3203.jpg'},
    {'name': 'neutral/IMG_3201.jpg', 'path': 'neutral/IMG_3201.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var trialClock;
var welcome;
var key_resp;
var trial_routineClock;
var target_image;
var fixation;
var grid_img1;
var grid_img2;
var grid_img3;
var grid_img4;
var grid_img5;
var grid_img6;
var grid_img7;
var grid_img8;
var grid_img9;
var keyResp;
var endClock;
var text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: '欢迎参加本次实验\n\n任务说明：\n首先会出现一张目标图片，请记住它。\n随后会出现一个九宫格，请你快速判断里面有没有这张目标图片。\n\n按键规则：\n看到目标图片 → 按 F 键\n没有看到目标图片 → 按J键\n\n请又快又准地做出反应。\n准备好后，请按 空格键 开始实验。',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1, 1, 1]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_routine"
  trial_routineClock = new util.Clock();
  target_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'target_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  grid_img1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), 0.3], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  grid_img2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.3], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  grid_img3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, 0.3], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  grid_img4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  grid_img5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  grid_img6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, 0], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  grid_img7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), (- 0.3)], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  grid_img8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img8', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.3)], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  grid_img9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'grid_img9', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, (- 0.3)], 
    draggable: false,
    size : [0.3, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  keyResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '实验已完成！\n感谢您的参与！',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var trialMaxDurationReached;
var _key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(welcome);
    trialComponents.push(key_resp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }
    
    
    // if welcome is active this frame...
    if (welcome.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (welcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      welcome.tStop = t;  // not accounting for scr refresh
      welcome.frameNStop = frameN;  // exact frame index
      // update status
      welcome.status = PsychoJS.Status.FINISHED;
      welcome.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['space'] === 'string' ? [['space']] : ['space'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'loopTemplate1 - 副本.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trial_routineRoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_routineRoutineEachFrame());
      trialsLoopScheduler.add(trial_routineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trial_routineMaxDurationReached;
var _keyResp_allKeys;
var trial_routineMaxDuration;
var trial_routineComponents;
function trial_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_routine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trial_routineClock.reset(routineTimer.getTime());
    routineTimer.add(4.500000);
    trial_routineMaxDurationReached = false;
    // update component parameters for each repeat
    target_image.setImage(target_img);
    grid_img1.setImage(nine_images.split(",")[0]);
    grid_img2.setImage(nine_images.split(",")[1]);
    grid_img3.setImage(nine_images.split(",")[2]);
    grid_img4.setImage(nine_images.split(",")[3]);
    grid_img5.setImage(nine_images.split(",")[4]);
    grid_img6.setImage(nine_images.split(",")[5]);
    grid_img7.setImage(nine_images.split(",")[6]);
    grid_img8.setImage(nine_images.split(",")[7]);
    grid_img9.setImage(nine_images.split(",")[8]);
    keyResp.keys = undefined;
    keyResp.rt = undefined;
    _keyResp_allKeys = [];
    psychoJS.experiment.addData('trial_routine.started', globalClock.getTime());
    trial_routineMaxDuration = null
    // keep track of which components have finished
    trial_routineComponents = [];
    trial_routineComponents.push(target_image);
    trial_routineComponents.push(fixation);
    trial_routineComponents.push(grid_img1);
    trial_routineComponents.push(grid_img2);
    trial_routineComponents.push(grid_img3);
    trial_routineComponents.push(grid_img4);
    trial_routineComponents.push(grid_img5);
    trial_routineComponents.push(grid_img6);
    trial_routineComponents.push(grid_img7);
    trial_routineComponents.push(grid_img8);
    trial_routineComponents.push(grid_img9);
    trial_routineComponents.push(keyResp);
    
    trial_routineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_routine' ---
    // get current time
    t = trial_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target_image* updates
    if (t >= 0.0 && target_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_image.tStart = t;  // (not accounting for frame time here)
      target_image.frameNStart = frameN;  // exact frame index
      
      target_image.setAutoDraw(true);
    }
    
    
    // if target_image is active this frame...
    if (target_image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (target_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      target_image.tStop = t;  // not accounting for scr refresh
      target_image.frameNStop = frameN;  // exact frame index
      // update status
      target_image.status = PsychoJS.Status.FINISHED;
      target_image.setAutoDraw(false);
    }
    
    
    // *fixation* updates
    if (t >= 1 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }
    
    
    // if fixation is active this frame...
    if (fixation.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fixation.tStop = t;  // not accounting for scr refresh
      fixation.frameNStop = frameN;  // exact frame index
      // update status
      fixation.status = PsychoJS.Status.FINISHED;
      fixation.setAutoDraw(false);
    }
    
    
    // *grid_img1* updates
    if (t >= 1.5 && grid_img1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img1.tStart = t;  // (not accounting for frame time here)
      grid_img1.frameNStart = frameN;  // exact frame index
      
      grid_img1.setAutoDraw(true);
    }
    
    
    // if grid_img1 is active this frame...
    if (grid_img1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img1.tStop = t;  // not accounting for scr refresh
      grid_img1.frameNStop = frameN;  // exact frame index
      // update status
      grid_img1.status = PsychoJS.Status.FINISHED;
      grid_img1.setAutoDraw(false);
    }
    
    
    // *grid_img2* updates
    if (t >= 1.5 && grid_img2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img2.tStart = t;  // (not accounting for frame time here)
      grid_img2.frameNStart = frameN;  // exact frame index
      
      grid_img2.setAutoDraw(true);
    }
    
    
    // if grid_img2 is active this frame...
    if (grid_img2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img2.tStop = t;  // not accounting for scr refresh
      grid_img2.frameNStop = frameN;  // exact frame index
      // update status
      grid_img2.status = PsychoJS.Status.FINISHED;
      grid_img2.setAutoDraw(false);
    }
    
    
    // *grid_img3* updates
    if (t >= 1.5 && grid_img3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img3.tStart = t;  // (not accounting for frame time here)
      grid_img3.frameNStart = frameN;  // exact frame index
      
      grid_img3.setAutoDraw(true);
    }
    
    
    // if grid_img3 is active this frame...
    if (grid_img3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img3.tStop = t;  // not accounting for scr refresh
      grid_img3.frameNStop = frameN;  // exact frame index
      // update status
      grid_img3.status = PsychoJS.Status.FINISHED;
      grid_img3.setAutoDraw(false);
    }
    
    
    // *grid_img4* updates
    if (t >= 1.5 && grid_img4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img4.tStart = t;  // (not accounting for frame time here)
      grid_img4.frameNStart = frameN;  // exact frame index
      
      grid_img4.setAutoDraw(true);
    }
    
    
    // if grid_img4 is active this frame...
    if (grid_img4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img4.tStop = t;  // not accounting for scr refresh
      grid_img4.frameNStop = frameN;  // exact frame index
      // update status
      grid_img4.status = PsychoJS.Status.FINISHED;
      grid_img4.setAutoDraw(false);
    }
    
    
    // *grid_img5* updates
    if (t >= 1.5 && grid_img5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img5.tStart = t;  // (not accounting for frame time here)
      grid_img5.frameNStart = frameN;  // exact frame index
      
      grid_img5.setAutoDraw(true);
    }
    
    
    // if grid_img5 is active this frame...
    if (grid_img5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img5.tStop = t;  // not accounting for scr refresh
      grid_img5.frameNStop = frameN;  // exact frame index
      // update status
      grid_img5.status = PsychoJS.Status.FINISHED;
      grid_img5.setAutoDraw(false);
    }
    
    
    // *grid_img6* updates
    if (t >= 1.5 && grid_img6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img6.tStart = t;  // (not accounting for frame time here)
      grid_img6.frameNStart = frameN;  // exact frame index
      
      grid_img6.setAutoDraw(true);
    }
    
    
    // if grid_img6 is active this frame...
    if (grid_img6.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img6.tStop = t;  // not accounting for scr refresh
      grid_img6.frameNStop = frameN;  // exact frame index
      // update status
      grid_img6.status = PsychoJS.Status.FINISHED;
      grid_img6.setAutoDraw(false);
    }
    
    
    // *grid_img7* updates
    if (t >= 1.5 && grid_img7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img7.tStart = t;  // (not accounting for frame time here)
      grid_img7.frameNStart = frameN;  // exact frame index
      
      grid_img7.setAutoDraw(true);
    }
    
    
    // if grid_img7 is active this frame...
    if (grid_img7.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img7.tStop = t;  // not accounting for scr refresh
      grid_img7.frameNStop = frameN;  // exact frame index
      // update status
      grid_img7.status = PsychoJS.Status.FINISHED;
      grid_img7.setAutoDraw(false);
    }
    
    
    // *grid_img8* updates
    if (t >= 1.5 && grid_img8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img8.tStart = t;  // (not accounting for frame time here)
      grid_img8.frameNStart = frameN;  // exact frame index
      
      grid_img8.setAutoDraw(true);
    }
    
    
    // if grid_img8 is active this frame...
    if (grid_img8.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img8.tStop = t;  // not accounting for scr refresh
      grid_img8.frameNStop = frameN;  // exact frame index
      // update status
      grid_img8.status = PsychoJS.Status.FINISHED;
      grid_img8.setAutoDraw(false);
    }
    
    
    // *grid_img9* updates
    if (t >= 1.5 && grid_img9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      grid_img9.tStart = t;  // (not accounting for frame time here)
      grid_img9.frameNStart = frameN;  // exact frame index
      
      grid_img9.setAutoDraw(true);
    }
    
    
    // if grid_img9 is active this frame...
    if (grid_img9.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (grid_img9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      grid_img9.tStop = t;  // not accounting for scr refresh
      grid_img9.frameNStop = frameN;  // exact frame index
      // update status
      grid_img9.status = PsychoJS.Status.FINISHED;
      grid_img9.setAutoDraw(false);
    }
    
    
    // *keyResp* updates
    if (t >= 1.5 && keyResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyResp.tStart = t;  // (not accounting for frame time here)
      keyResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyResp.clearEvents(); });
    }
    frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (keyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      keyResp.tStop = t;  // not accounting for scr refresh
      keyResp.frameNStop = frameN;  // exact frame index
      // update status
      keyResp.status = PsychoJS.Status.FINISHED;
      frameRemains = 1.5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (keyResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        keyResp.tStop = t;  // not accounting for scr refresh
        keyResp.frameNStop = frameN;  // exact frame index
        // update status
        keyResp.status = PsychoJS.Status.FINISHED;
        keyResp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if keyResp is active this frame...
      if (keyResp.status === PsychoJS.Status.STARTED) {
        let theseKeys = keyResp.getKeys({
          keyList: typeof [['f','j']] === 'string' ? [[['f','j']]] : [['f','j']], 
          waitRelease: false
        });
        _keyResp_allKeys = _keyResp_allKeys.concat(theseKeys);
        if (_keyResp_allKeys.length > 0) {
          keyResp.keys = _keyResp_allKeys[_keyResp_allKeys.length - 1].name;  // just the last key pressed
          keyResp.rt = _keyResp_allKeys[_keyResp_allKeys.length - 1].rt;
          keyResp.duration = _keyResp_allKeys[_keyResp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      trial_routineComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
var _pj;
var user_press;
var raw_key;
var correct_press;
var feedback_msg;
var feedback_color;
var feedback;
function trial_routineRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'trial_routine' ---
      trial_routineComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('trial_routine.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(keyResp.corr, level);
      }
      psychoJS.experiment.addData('keyResp.keys', keyResp.keys);
      if (typeof keyResp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('keyResp.rt', keyResp.rt);
          psychoJS.experiment.addData('keyResp.duration', keyResp.duration);
          routineTimer.reset();
          }
      
      keyResp.stop();
      // Run 'End Routine' code from code
      var _pj;
      function _pj_snippets(container) {
          function in_es6(left, right) {
              if (((right instanceof Array) || ((typeof right) === "string"))) {
                  return (right.indexOf(left) > (- 1));
              } else {
                  if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                      return right.has(left);
                  } else {
                      return (left in right);
                  }
              }
          }
          container["in_es6"] = in_es6;
          return container;
      }
      _pj = {};
      _pj_snippets(_pj);
      user_press = "";
      if ((keyResp.keys && (keyResp.keys.length > 0))) {
          raw_key = keyResp.keys[0].toString().strip().toLowerCase();
          if (_pj.in_es6(raw_key, ["j"])) {
              user_press = "j";
          } else {
              user_press = raw_key;
          }
      }
      try {
          current_type = Number.parseInt(Number.parseFloat(type));
      } catch(e) {
          current_type = 4;
      }
      if (_pj.in_es6(current_type, [1, 2, 3])) {
          correct_press = "f";
      } else {
          if ((current_type === 4)) {
              correct_press = "j";
          } else {
              correct_press = "";
          }
      }
      if ((user_press === correct_press)) {
          feedback_msg = "\u6b63\u786e\uff01";
          feedback_color = "green";
      } else {
          feedback_msg = "\u9519\u8bef\uff01";
          feedback_color = "red";
      }
      feedback = new visual.TextStim({"win": psychoJS.window, "text": feedback_msg, "color": feedback_color, "height": 0.15, "pos": [0, 0]});
      feedback.draw();
      psychoJS.window.flip();
      core.wait(0.8);
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (trial_routineMaxDurationReached) {
          trial_routineClock.add(trial_routineMaxDuration);
      } else {
          trial_routineClock.add(4.500000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var endMaxDurationReached;
var endMaxDuration;
var endComponents;
function endRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'end' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      endClock.reset(routineTimer.getTime());
      routineTimer.add(2.000000);
      endMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('end.started', globalClock.getTime());
      endMaxDuration = null
      // keep track of which components have finished
      endComponents = [];
      endComponents.push(text);
      
      endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function endRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'end' ---
      // get current time
      t = endClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text* updates
      if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text.tStart = t;  // (not accounting for frame time here)
        text.frameNStart = frameN;  // exact frame index
        
        text.setAutoDraw(true);
      }
      
      
      // if text is active this frame...
      if (text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text.tStop = t;  // not accounting for scr refresh
        text.frameNStop = frameN;  // exact frame index
        // update status
        text.status = PsychoJS.Status.FINISHED;
        text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      endComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function endRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'end' ---
      endComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('end.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (endMaxDurationReached) {
          endClock.add(endMaxDuration);
      } else {
          endClock.add(2.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
