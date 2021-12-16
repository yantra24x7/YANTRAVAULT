(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/diff-match-patch/index.js":
/*!************************************************!*\
  !*** ./node_modules/diff-match-patch/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Diff Match and Patch
 * Copyright 2018 The diff-match-patch Authors.
 * https://github.com/google/diff-match-patch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Computes the difference between two texts to create a patch.
 * Applies the patch onto another text, allowing for errors.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * Class containing the diff, match and patch methods.
 * @constructor
 */
function diff_match_patch() {

  // Defaults.
  // Redefine these in your program to override the defaults.

  // Number of seconds to map a diff before giving up (0 for infinity).
  this.Diff_Timeout = 1.0;
  // Cost of an empty edit operation in terms of edit characters.
  this.Diff_EditCost = 4;
  // At what point is no match declared (0.0 = perfection, 1.0 = very loose).
  this.Match_Threshold = 0.5;
  // How far to search for a match (0 = exact location, 1000+ = broad match).
  // A match this many characters away from the expected location will add
  // 1.0 to the score (0.0 is a perfect match).
  this.Match_Distance = 1000;
  // When deleting a large block of text (over ~64 characters), how close do
  // the contents have to be to match the expected contents. (0.0 = perfection,
  // 1.0 = very loose).  Note that Match_Threshold controls how closely the
  // end points of a delete need to match.
  this.Patch_DeleteThreshold = 0.5;
  // Chunk size for context length.
  this.Patch_Margin = 4;

  // The number of bits in an int.
  this.Match_MaxBits = 32;
}


//  DIFF FUNCTIONS


/**
 * The data structure representing a diff is an array of tuples:
 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
 */
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;

/** @typedef {{0: number, 1: string}} */
diff_match_patch.Diff;


/**
 * Find the differences between two texts.  Simplifies the problem by stripping
 * any common prefix or suffix off the texts before diffing.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean=} opt_checklines Optional speedup flag. If present and false,
 *     then don't run a line-level diff first to identify the changed areas.
 *     Defaults to true, which does a faster, slightly less optimal diff.
 * @param {number} opt_deadline Optional time when the diff should be complete
 *     by.  Used internally for recursive calls.  Users should set DiffTimeout
 *     instead.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 */
diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines,
    opt_deadline) {
  // Set a deadline by which time the diff must be complete.
  if (typeof opt_deadline == 'undefined') {
    if (this.Diff_Timeout <= 0) {
      opt_deadline = Number.MAX_VALUE;
    } else {
      opt_deadline = (new Date).getTime() + this.Diff_Timeout * 1000;
    }
  }
  var deadline = opt_deadline;

  // Check for null inputs.
  if (text1 == null || text2 == null) {
    throw new Error('Null input. (diff_main)');
  }

  // Check for equality (speedup).
  if (text1 == text2) {
    if (text1) {
      return [[DIFF_EQUAL, text1]];
    }
    return [];
  }

  if (typeof opt_checklines == 'undefined') {
    opt_checklines = true;
  }
  var checklines = opt_checklines;

  // Trim off common prefix (speedup).
  var commonlength = this.diff_commonPrefix(text1, text2);
  var commonprefix = text1.substring(0, commonlength);
  text1 = text1.substring(commonlength);
  text2 = text2.substring(commonlength);

  // Trim off common suffix (speedup).
  commonlength = this.diff_commonSuffix(text1, text2);
  var commonsuffix = text1.substring(text1.length - commonlength);
  text1 = text1.substring(0, text1.length - commonlength);
  text2 = text2.substring(0, text2.length - commonlength);

  // Compute the diff on the middle block.
  var diffs = this.diff_compute_(text1, text2, checklines, deadline);

  // Restore the prefix and suffix.
  if (commonprefix) {
    diffs.unshift([DIFF_EQUAL, commonprefix]);
  }
  if (commonsuffix) {
    diffs.push([DIFF_EQUAL, commonsuffix]);
  }
  this.diff_cleanupMerge(diffs);
  return diffs;
};


/**
 * Find the differences between two texts.  Assumes that the texts do not
 * have any common prefix or suffix.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {boolean} checklines Speedup flag.  If false, then don't run a
 *     line-level diff first to identify the changed areas.
 *     If true, then run a faster, slightly less optimal diff.
 * @param {number} deadline Time when the diff should be complete by.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_compute_ = function(text1, text2, checklines,
    deadline) {
  var diffs;

  if (!text1) {
    // Just add some text (speedup).
    return [[DIFF_INSERT, text2]];
  }

  if (!text2) {
    // Just delete some text (speedup).
    return [[DIFF_DELETE, text1]];
  }

  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  var i = longtext.indexOf(shorttext);
  if (i != -1) {
    // Shorter text is inside the longer text (speedup).
    diffs = [[DIFF_INSERT, longtext.substring(0, i)],
             [DIFF_EQUAL, shorttext],
             [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
    // Swap insertions for deletions if diff is reversed.
    if (text1.length > text2.length) {
      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
    }
    return diffs;
  }

  if (shorttext.length == 1) {
    // Single character string.
    // After the previous speedup, the character can't be an equality.
    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  }

  // Check to see if the problem can be split in two.
  var hm = this.diff_halfMatch_(text1, text2);
  if (hm) {
    // A half-match was found, sort out the return data.
    var text1_a = hm[0];
    var text1_b = hm[1];
    var text2_a = hm[2];
    var text2_b = hm[3];
    var mid_common = hm[4];
    // Send both pairs off for separate processing.
    var diffs_a = this.diff_main(text1_a, text2_a, checklines, deadline);
    var diffs_b = this.diff_main(text1_b, text2_b, checklines, deadline);
    // Merge the results.
    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
  }

  if (checklines && text1.length > 100 && text2.length > 100) {
    return this.diff_lineMode_(text1, text2, deadline);
  }

  return this.diff_bisect_(text1, text2, deadline);
};


/**
 * Do a quick line-level diff on both strings, then rediff the parts for
 * greater accuracy.
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} deadline Time when the diff should be complete by.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_lineMode_ = function(text1, text2, deadline) {
  // Scan the text on a line-by-line basis first.
  var a = this.diff_linesToChars_(text1, text2);
  text1 = a.chars1;
  text2 = a.chars2;
  var linearray = a.lineArray;

  var diffs = this.diff_main(text1, text2, false, deadline);

  // Convert the diff back to original text.
  this.diff_charsToLines_(diffs, linearray);
  // Eliminate freak matches (e.g. blank lines)
  this.diff_cleanupSemantic(diffs);

  // Rediff any replacement blocks, this time character-by-character.
  // Add a dummy entry at the end.
  diffs.push([DIFF_EQUAL, '']);
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete >= 1 && count_insert >= 1) {
          // Delete the offending records and add the merged ones.
          diffs.splice(pointer - count_delete - count_insert,
                       count_delete + count_insert);
          pointer = pointer - count_delete - count_insert;
          var a = this.diff_main(text_delete, text_insert, false, deadline);
          for (var j = a.length - 1; j >= 0; j--) {
            diffs.splice(pointer, 0, a[j]);
          }
          pointer = pointer + a.length;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
    pointer++;
  }
  diffs.pop();  // Remove the dummy entry at the end.

  return diffs;
};


/**
 * Find the 'middle snake' of a diff, split the problem in two
 * and return the recursively constructed diff.
 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} deadline Time at which to bail if not yet complete.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_bisect_ = function(text1, text2, deadline) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  var max_d = Math.ceil((text1_length + text2_length) / 2);
  var v_offset = max_d;
  var v_length = 2 * max_d;
  var v1 = new Array(v_length);
  var v2 = new Array(v_length);
  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
  // integers and undefined.
  for (var x = 0; x < v_length; x++) {
    v1[x] = -1;
    v2[x] = -1;
  }
  v1[v_offset + 1] = 0;
  v2[v_offset + 1] = 0;
  var delta = text1_length - text2_length;
  // If the total number of characters is odd, then the front path will collide
  // with the reverse path.
  var front = (delta % 2 != 0);
  // Offsets for start and end of k loop.
  // Prevents mapping of space beyond the grid.
  var k1start = 0;
  var k1end = 0;
  var k2start = 0;
  var k2end = 0;
  for (var d = 0; d < max_d; d++) {
    // Bail out if deadline is reached.
    if ((new Date()).getTime() > deadline) {
      break;
    }

    // Walk the front path one step.
    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
      var k1_offset = v_offset + k1;
      var x1;
      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
        x1 = v1[k1_offset + 1];
      } else {
        x1 = v1[k1_offset - 1] + 1;
      }
      var y1 = x1 - k1;
      while (x1 < text1_length && y1 < text2_length &&
             text1.charAt(x1) == text2.charAt(y1)) {
        x1++;
        y1++;
      }
      v1[k1_offset] = x1;
      if (x1 > text1_length) {
        // Ran off the right of the graph.
        k1end += 2;
      } else if (y1 > text2_length) {
        // Ran off the bottom of the graph.
        k1start += 2;
      } else if (front) {
        var k2_offset = v_offset + delta - k1;
        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
          // Mirror x2 onto top-left coordinate system.
          var x2 = text1_length - v2[k2_offset];
          if (x1 >= x2) {
            // Overlap detected.
            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
          }
        }
      }
    }

    // Walk the reverse path one step.
    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
      var k2_offset = v_offset + k2;
      var x2;
      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
        x2 = v2[k2_offset + 1];
      } else {
        x2 = v2[k2_offset - 1] + 1;
      }
      var y2 = x2 - k2;
      while (x2 < text1_length && y2 < text2_length &&
             text1.charAt(text1_length - x2 - 1) ==
             text2.charAt(text2_length - y2 - 1)) {
        x2++;
        y2++;
      }
      v2[k2_offset] = x2;
      if (x2 > text1_length) {
        // Ran off the left of the graph.
        k2end += 2;
      } else if (y2 > text2_length) {
        // Ran off the top of the graph.
        k2start += 2;
      } else if (!front) {
        var k1_offset = v_offset + delta - k2;
        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
          var x1 = v1[k1_offset];
          var y1 = v_offset + x1 - k1_offset;
          // Mirror x2 onto top-left coordinate system.
          x2 = text1_length - x2;
          if (x1 >= x2) {
            // Overlap detected.
            return this.diff_bisectSplit_(text1, text2, x1, y1, deadline);
          }
        }
      }
    }
  }
  // Diff took too long and hit the deadline or
  // number of diffs equals number of characters, no commonality at all.
  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
};


/**
 * Given the location of the 'middle snake', split the diff in two parts
 * and recurse.
 * @param {string} text1 Old string to be diffed.
 * @param {string} text2 New string to be diffed.
 * @param {number} x Index of split point in text1.
 * @param {number} y Index of split point in text2.
 * @param {number} deadline Time at which to bail if not yet complete.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @private
 */
diff_match_patch.prototype.diff_bisectSplit_ = function(text1, text2, x, y,
    deadline) {
  var text1a = text1.substring(0, x);
  var text2a = text2.substring(0, y);
  var text1b = text1.substring(x);
  var text2b = text2.substring(y);

  // Compute both diffs serially.
  var diffs = this.diff_main(text1a, text2a, false, deadline);
  var diffsb = this.diff_main(text1b, text2b, false, deadline);

  return diffs.concat(diffsb);
};


/**
 * Split two texts into an array of strings.  Reduce the texts to a string of
 * hashes where each Unicode character represents one line.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
 *     An object containing the encoded text1, the encoded text2 and
 *     the array of unique strings.
 *     The zeroth element of the array of unique strings is intentionally blank.
 * @private
 */
diff_match_patch.prototype.diff_linesToChars_ = function(text1, text2) {
  var lineArray = [];  // e.g. lineArray[4] == 'Hello\n'
  var lineHash = {};   // e.g. lineHash['Hello\n'] == 4

  // '\x00' is a valid character, but various debuggers don't like it.
  // So we'll insert a junk entry to avoid generating a null character.
  lineArray[0] = '';

  /**
   * Split a text into an array of strings.  Reduce the texts to a string of
   * hashes where each Unicode character represents one line.
   * Modifies linearray and linehash through being a closure.
   * @param {string} text String to encode.
   * @return {string} Encoded string.
   * @private
   */
  function diff_linesToCharsMunge_(text) {
    var chars = '';
    // Walk the text, pulling out a substring for each line.
    // text.split('\n') would would temporarily double our memory footprint.
    // Modifying text would create many large strings to garbage collect.
    var lineStart = 0;
    var lineEnd = -1;
    // Keeping our own length variable is faster than looking it up.
    var lineArrayLength = lineArray.length;
    while (lineEnd < text.length - 1) {
      lineEnd = text.indexOf('\n', lineStart);
      if (lineEnd == -1) {
        lineEnd = text.length - 1;
      }
      var line = text.substring(lineStart, lineEnd + 1);
      lineStart = lineEnd + 1;

      if (lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) :
          (lineHash[line] !== undefined)) {
        chars += String.fromCharCode(lineHash[line]);
      } else {
        chars += String.fromCharCode(lineArrayLength);
        lineHash[line] = lineArrayLength;
        lineArray[lineArrayLength++] = line;
      }
    }
    return chars;
  }

  var chars1 = diff_linesToCharsMunge_(text1);
  var chars2 = diff_linesToCharsMunge_(text2);
  return {chars1: chars1, chars2: chars2, lineArray: lineArray};
};


/**
 * Rehydrate the text in a diff from a string of line hashes to real lines of
 * text.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @param {!Array.<string>} lineArray Array of unique strings.
 * @private
 */
diff_match_patch.prototype.diff_charsToLines_ = function(diffs, lineArray) {
  for (var x = 0; x < diffs.length; x++) {
    var chars = diffs[x][1];
    var text = [];
    for (var y = 0; y < chars.length; y++) {
      text[y] = lineArray[chars.charCodeAt(y)];
    }
    diffs[x][1] = text.join('');
  }
};


/**
 * Determine the common prefix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the start of each
 *     string.
 */
diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerstart = 0;
  while (pointermin < pointermid) {
    if (text1.substring(pointerstart, pointermid) ==
        text2.substring(pointerstart, pointermid)) {
      pointermin = pointermid;
      pointerstart = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine the common suffix of two strings.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of each string.
 */
diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {
  // Quick check for common null cases.
  if (!text1 || !text2 ||
      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
    return 0;
  }
  // Binary search.
  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
  var pointermin = 0;
  var pointermax = Math.min(text1.length, text2.length);
  var pointermid = pointermax;
  var pointerend = 0;
  while (pointermin < pointermid) {
    if (text1.substring(text1.length - pointermid, text1.length - pointerend) ==
        text2.substring(text2.length - pointermid, text2.length - pointerend)) {
      pointermin = pointermid;
      pointerend = pointermin;
    } else {
      pointermax = pointermid;
    }
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  }
  return pointermid;
};


/**
 * Determine if the suffix of one string is the prefix of another.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {number} The number of characters common to the end of the first
 *     string and the start of the second string.
 * @private
 */
diff_match_patch.prototype.diff_commonOverlap_ = function(text1, text2) {
  // Cache the text lengths to prevent multiple calls.
  var text1_length = text1.length;
  var text2_length = text2.length;
  // Eliminate the null case.
  if (text1_length == 0 || text2_length == 0) {
    return 0;
  }
  // Truncate the longer string.
  if (text1_length > text2_length) {
    text1 = text1.substring(text1_length - text2_length);
  } else if (text1_length < text2_length) {
    text2 = text2.substring(0, text1_length);
  }
  var text_length = Math.min(text1_length, text2_length);
  // Quick check for the worst case.
  if (text1 == text2) {
    return text_length;
  }

  // Start by looking for a single character match
  // and increase length until no match is found.
  // Performance analysis: http://neil.fraser.name/news/2010/11/04/
  var best = 0;
  var length = 1;
  while (true) {
    var pattern = text1.substring(text_length - length);
    var found = text2.indexOf(pattern);
    if (found == -1) {
      return best;
    }
    length += found;
    if (found == 0 || text1.substring(text_length - length) ==
        text2.substring(0, length)) {
      best = length;
      length++;
    }
  }
};


/**
 * Do the two texts share a substring which is at least half the length of the
 * longer text?
 * This speedup can produce non-minimal diffs.
 * @param {string} text1 First string.
 * @param {string} text2 Second string.
 * @return {Array.<string>} Five element Array, containing the prefix of
 *     text1, the suffix of text1, the prefix of text2, the suffix of
 *     text2 and the common middle.  Or null if there was no match.
 * @private
 */
diff_match_patch.prototype.diff_halfMatch_ = function(text1, text2) {
  if (this.Diff_Timeout <= 0) {
    // Don't risk returning a non-optimal diff if we have unlimited time.
    return null;
  }
  var longtext = text1.length > text2.length ? text1 : text2;
  var shorttext = text1.length > text2.length ? text2 : text1;
  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
    return null;  // Pointless.
  }
  var dmp = this;  // 'this' becomes 'window' in a closure.

  /**
   * Does a substring of shorttext exist within longtext such that the substring
   * is at least half the length of longtext?
   * Closure, but does not reference any external variables.
   * @param {string} longtext Longer string.
   * @param {string} shorttext Shorter string.
   * @param {number} i Start index of quarter length substring within longtext.
   * @return {Array.<string>} Five element Array, containing the prefix of
   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
   *     of shorttext and the common middle.  Or null if there was no match.
   * @private
   */
  function diff_halfMatchI_(longtext, shorttext, i) {
    // Start with a 1/4 length substring at position i as a seed.
    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
    var j = -1;
    var best_common = '';
    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
      var prefixLength = dmp.diff_commonPrefix(longtext.substring(i),
                                               shorttext.substring(j));
      var suffixLength = dmp.diff_commonSuffix(longtext.substring(0, i),
                                               shorttext.substring(0, j));
      if (best_common.length < suffixLength + prefixLength) {
        best_common = shorttext.substring(j - suffixLength, j) +
            shorttext.substring(j, j + prefixLength);
        best_longtext_a = longtext.substring(0, i - suffixLength);
        best_longtext_b = longtext.substring(i + prefixLength);
        best_shorttext_a = shorttext.substring(0, j - suffixLength);
        best_shorttext_b = shorttext.substring(j + prefixLength);
      }
    }
    if (best_common.length * 2 >= longtext.length) {
      return [best_longtext_a, best_longtext_b,
              best_shorttext_a, best_shorttext_b, best_common];
    } else {
      return null;
    }
  }

  // First check if the second quarter is the seed for a half-match.
  var hm1 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 4));
  // Check again based on the third quarter.
  var hm2 = diff_halfMatchI_(longtext, shorttext,
                             Math.ceil(longtext.length / 2));
  var hm;
  if (!hm1 && !hm2) {
    return null;
  } else if (!hm2) {
    hm = hm1;
  } else if (!hm1) {
    hm = hm2;
  } else {
    // Both matched.  Select the longest.
    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  }

  // A half-match was found, sort out the return data.
  var text1_a, text1_b, text2_a, text2_b;
  if (text1.length > text2.length) {
    text1_a = hm[0];
    text1_b = hm[1];
    text2_a = hm[2];
    text2_b = hm[3];
  } else {
    text2_a = hm[0];
    text2_b = hm[1];
    text1_a = hm[2];
    text1_b = hm[3];
  }
  var mid_common = hm[4];
  return [text1_a, text1_b, text2_a, text2_b, mid_common];
};


/**
 * Reduce the number of edits by eliminating semantically trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastequality = null;
  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
  var pointer = 0;  // Index of current position.
  // Number of characters that changed prior to the equality.
  var length_insertions1 = 0;
  var length_deletions1 = 0;
  // Number of characters that changed after the equality.
  var length_insertions2 = 0;
  var length_deletions2 = 0;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
      equalities[equalitiesLength++] = pointer;
      length_insertions1 = length_insertions2;
      length_deletions1 = length_deletions2;
      length_insertions2 = 0;
      length_deletions2 = 0;
      lastequality = diffs[pointer][1];
    } else {  // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_INSERT) {
        length_insertions2 += diffs[pointer][1].length;
      } else {
        length_deletions2 += diffs[pointer][1].length;
      }
      // Eliminate an equality that is smaller or equal to the edits on both
      // sides of it.
      if (lastequality && (lastequality.length <=
          Math.max(length_insertions1, length_deletions1)) &&
          (lastequality.length <= Math.max(length_insertions2,
                                           length_deletions2))) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        // Throw away the equality we just deleted.
        equalitiesLength--;
        // Throw away the previous equality (it needs to be reevaluated).
        equalitiesLength--;
        pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
        length_insertions1 = 0;  // Reset the counters.
        length_deletions1 = 0;
        length_insertions2 = 0;
        length_deletions2 = 0;
        lastequality = null;
        changes = true;
      }
    }
    pointer++;
  }

  // Normalize the diff.
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
  this.diff_cleanupSemanticLossless(diffs);

  // Find any overlaps between deletions and insertions.
  // e.g: <del>abcxxx</del><ins>xxxdef</ins>
  //   -> <del>abc</del>xxx<ins>def</ins>
  // e.g: <del>xxxabc</del><ins>defxxx</ins>
  //   -> <ins>def</ins>xxx<del>abc</del>
  // Only extract an overlap if it is as big as the edit ahead or behind it.
  pointer = 1;
  while (pointer < diffs.length) {
    if (diffs[pointer - 1][0] == DIFF_DELETE &&
        diffs[pointer][0] == DIFF_INSERT) {
      var deletion = diffs[pointer - 1][1];
      var insertion = diffs[pointer][1];
      var overlap_length1 = this.diff_commonOverlap_(deletion, insertion);
      var overlap_length2 = this.diff_commonOverlap_(insertion, deletion);
      if (overlap_length1 >= overlap_length2) {
        if (overlap_length1 >= deletion.length / 2 ||
            overlap_length1 >= insertion.length / 2) {
          // Overlap found.  Insert an equality and trim the surrounding edits.
          diffs.splice(pointer, 0,
              [DIFF_EQUAL, insertion.substring(0, overlap_length1)]);
          diffs[pointer - 1][1] =
              deletion.substring(0, deletion.length - overlap_length1);
          diffs[pointer + 1][1] = insertion.substring(overlap_length1);
          pointer++;
        }
      } else {
        if (overlap_length2 >= deletion.length / 2 ||
            overlap_length2 >= insertion.length / 2) {
          // Reverse overlap found.
          // Insert an equality and swap and trim the surrounding edits.
          diffs.splice(pointer, 0,
              [DIFF_EQUAL, deletion.substring(0, overlap_length2)]);
          diffs[pointer - 1][0] = DIFF_INSERT;
          diffs[pointer - 1][1] =
              insertion.substring(0, insertion.length - overlap_length2);
          diffs[pointer + 1][0] = DIFF_DELETE;
          diffs[pointer + 1][1] =
              deletion.substring(overlap_length2);
          pointer++;
        }
      }
      pointer++;
    }
    pointer++;
  }
};


/**
 * Look for single edits surrounded on both sides by equalities
 * which can be shifted sideways to align the edit to a word boundary.
 * e.g: The c<ins>at c</ins>ame. -> The <ins>cat </ins>came.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {
  /**
   * Given two strings, compute a score representing whether the internal
   * boundary falls on logical boundaries.
   * Scores range from 6 (best) to 0 (worst).
   * Closure, but does not reference any external variables.
   * @param {string} one First string.
   * @param {string} two Second string.
   * @return {number} The score.
   * @private
   */
  function diff_cleanupSemanticScore_(one, two) {
    if (!one || !two) {
      // Edges are the best.
      return 6;
    }

    // Each port of this function behaves slightly differently due to
    // subtle differences in each language's definition of things like
    // 'whitespace'.  Since this function's purpose is largely cosmetic,
    // the choice has been made to use each language's native features
    // rather than force total conformity.
    var char1 = one.charAt(one.length - 1);
    var char2 = two.charAt(0);
    var nonAlphaNumeric1 = char1.match(diff_match_patch.nonAlphaNumericRegex_);
    var nonAlphaNumeric2 = char2.match(diff_match_patch.nonAlphaNumericRegex_);
    var whitespace1 = nonAlphaNumeric1 &&
        char1.match(diff_match_patch.whitespaceRegex_);
    var whitespace2 = nonAlphaNumeric2 &&
        char2.match(diff_match_patch.whitespaceRegex_);
    var lineBreak1 = whitespace1 &&
        char1.match(diff_match_patch.linebreakRegex_);
    var lineBreak2 = whitespace2 &&
        char2.match(diff_match_patch.linebreakRegex_);
    var blankLine1 = lineBreak1 &&
        one.match(diff_match_patch.blanklineEndRegex_);
    var blankLine2 = lineBreak2 &&
        two.match(diff_match_patch.blanklineStartRegex_);

    if (blankLine1 || blankLine2) {
      // Five points for blank lines.
      return 5;
    } else if (lineBreak1 || lineBreak2) {
      // Four points for line breaks.
      return 4;
    } else if (nonAlphaNumeric1 && !whitespace1 && whitespace2) {
      // Three points for end of sentences.
      return 3;
    } else if (whitespace1 || whitespace2) {
      // Two points for whitespace.
      return 2;
    } else if (nonAlphaNumeric1 || nonAlphaNumeric2) {
      // One point for non-alphanumeric.
      return 1;
    }
    return 0;
  }

  var pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      var equality1 = diffs[pointer - 1][1];
      var edit = diffs[pointer][1];
      var equality2 = diffs[pointer + 1][1];

      // First, shift the edit as far left as possible.
      var commonOffset = this.diff_commonSuffix(equality1, edit);
      if (commonOffset) {
        var commonString = edit.substring(edit.length - commonOffset);
        equality1 = equality1.substring(0, equality1.length - commonOffset);
        edit = commonString + edit.substring(0, edit.length - commonOffset);
        equality2 = commonString + equality2;
      }

      // Second, step character by character right, looking for the best fit.
      var bestEquality1 = equality1;
      var bestEdit = edit;
      var bestEquality2 = equality2;
      var bestScore = diff_cleanupSemanticScore_(equality1, edit) +
          diff_cleanupSemanticScore_(edit, equality2);
      while (edit.charAt(0) === equality2.charAt(0)) {
        equality1 += edit.charAt(0);
        edit = edit.substring(1) + equality2.charAt(0);
        equality2 = equality2.substring(1);
        var score = diff_cleanupSemanticScore_(equality1, edit) +
            diff_cleanupSemanticScore_(edit, equality2);
        // The >= encourages trailing rather than leading whitespace on edits.
        if (score >= bestScore) {
          bestScore = score;
          bestEquality1 = equality1;
          bestEdit = edit;
          bestEquality2 = equality2;
        }
      }

      if (diffs[pointer - 1][1] != bestEquality1) {
        // We have an improvement, save it back to the diff.
        if (bestEquality1) {
          diffs[pointer - 1][1] = bestEquality1;
        } else {
          diffs.splice(pointer - 1, 1);
          pointer--;
        }
        diffs[pointer][1] = bestEdit;
        if (bestEquality2) {
          diffs[pointer + 1][1] = bestEquality2;
        } else {
          diffs.splice(pointer + 1, 1);
          pointer--;
        }
      }
    }
    pointer++;
  }
};

// Define some regex patterns for matching boundaries.
diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/;
diff_match_patch.whitespaceRegex_ = /\s/;
diff_match_patch.linebreakRegex_ = /[\r\n]/;
diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/;
diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/;

/**
 * Reduce the number of edits by eliminating operationally trivial equalities.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {
  var changes = false;
  var equalities = [];  // Stack of indices where equalities are found.
  var equalitiesLength = 0;  // Keeping our own length var is faster in JS.
  /** @type {?string} */
  var lastequality = null;
  // Always equal to diffs[equalities[equalitiesLength - 1]][1]
  var pointer = 0;  // Index of current position.
  // Is there an insertion operation before the last equality.
  var pre_ins = false;
  // Is there a deletion operation before the last equality.
  var pre_del = false;
  // Is there an insertion operation after the last equality.
  var post_ins = false;
  // Is there a deletion operation after the last equality.
  var post_del = false;
  while (pointer < diffs.length) {
    if (diffs[pointer][0] == DIFF_EQUAL) {  // Equality found.
      if (diffs[pointer][1].length < this.Diff_EditCost &&
          (post_ins || post_del)) {
        // Candidate found.
        equalities[equalitiesLength++] = pointer;
        pre_ins = post_ins;
        pre_del = post_del;
        lastequality = diffs[pointer][1];
      } else {
        // Not a candidate, and can never become one.
        equalitiesLength = 0;
        lastequality = null;
      }
      post_ins = post_del = false;
    } else {  // An insertion or deletion.
      if (diffs[pointer][0] == DIFF_DELETE) {
        post_del = true;
      } else {
        post_ins = true;
      }
      /*
       * Five types to be split:
       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
       * <ins>A</ins>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<ins>C</ins>
       * <ins>A</del>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<del>C</del>
       */
      if (lastequality && ((pre_ins && pre_del && post_ins && post_del) ||
                           ((lastequality.length < this.Diff_EditCost / 2) &&
                            (pre_ins + pre_del + post_ins + post_del) == 3))) {
        // Duplicate record.
        diffs.splice(equalities[equalitiesLength - 1], 0,
                     [DIFF_DELETE, lastequality]);
        // Change second copy to insert.
        diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
        equalitiesLength--;  // Throw away the equality we just deleted;
        lastequality = null;
        if (pre_ins && pre_del) {
          // No changes made which could affect previous entry, keep going.
          post_ins = post_del = true;
          equalitiesLength = 0;
        } else {
          equalitiesLength--;  // Throw away the previous equality.
          pointer = equalitiesLength > 0 ?
              equalities[equalitiesLength - 1] : -1;
          post_ins = post_del = false;
        }
        changes = true;
      }
    }
    pointer++;
  }

  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};


/**
 * Reorder and merge like edit sections.  Merge equalities.
 * Any edit section can move as long as it doesn't cross an equality.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 */
diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {
  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.
  var pointer = 0;
  var count_delete = 0;
  var count_insert = 0;
  var text_delete = '';
  var text_insert = '';
  var commonlength;
  while (pointer < diffs.length) {
    switch (diffs[pointer][0]) {
      case DIFF_INSERT:
        count_insert++;
        text_insert += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_DELETE:
        count_delete++;
        text_delete += diffs[pointer][1];
        pointer++;
        break;
      case DIFF_EQUAL:
        // Upon reaching an equality, check for prior redundancies.
        if (count_delete + count_insert > 1) {
          if (count_delete !== 0 && count_insert !== 0) {
            // Factor out any common prefixies.
            commonlength = this.diff_commonPrefix(text_insert, text_delete);
            if (commonlength !== 0) {
              if ((pointer - count_delete - count_insert) > 0 &&
                  diffs[pointer - count_delete - count_insert - 1][0] ==
                  DIFF_EQUAL) {
                diffs[pointer - count_delete - count_insert - 1][1] +=
                    text_insert.substring(0, commonlength);
              } else {
                diffs.splice(0, 0, [DIFF_EQUAL,
                                    text_insert.substring(0, commonlength)]);
                pointer++;
              }
              text_insert = text_insert.substring(commonlength);
              text_delete = text_delete.substring(commonlength);
            }
            // Factor out any common suffixies.
            commonlength = this.diff_commonSuffix(text_insert, text_delete);
            if (commonlength !== 0) {
              diffs[pointer][1] = text_insert.substring(text_insert.length -
                  commonlength) + diffs[pointer][1];
              text_insert = text_insert.substring(0, text_insert.length -
                  commonlength);
              text_delete = text_delete.substring(0, text_delete.length -
                  commonlength);
            }
          }
          // Delete the offending records and add the merged ones.
          if (count_delete === 0) {
            diffs.splice(pointer - count_insert,
                count_delete + count_insert, [DIFF_INSERT, text_insert]);
          } else if (count_insert === 0) {
            diffs.splice(pointer - count_delete,
                count_delete + count_insert, [DIFF_DELETE, text_delete]);
          } else {
            diffs.splice(pointer - count_delete - count_insert,
                count_delete + count_insert, [DIFF_DELETE, text_delete],
                [DIFF_INSERT, text_insert]);
          }
          pointer = pointer - count_delete - count_insert +
                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
          // Merge this equality with the previous one.
          diffs[pointer - 1][1] += diffs[pointer][1];
          diffs.splice(pointer, 1);
        } else {
          pointer++;
        }
        count_insert = 0;
        count_delete = 0;
        text_delete = '';
        text_insert = '';
        break;
    }
  }
  if (diffs[diffs.length - 1][1] === '') {
    diffs.pop();  // Remove the dummy entry at the end.
  }

  // Second pass: look for single edits surrounded on both sides by equalities
  // which can be shifted sideways to eliminate an equality.
  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  var changes = false;
  pointer = 1;
  // Intentionally ignore the first and last element (don't need checking).
  while (pointer < diffs.length - 1) {
    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
        diffs[pointer + 1][0] == DIFF_EQUAL) {
      // This is a single edit surrounded by equalities.
      if (diffs[pointer][1].substring(diffs[pointer][1].length -
          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
        // Shift the edit over the previous equality.
        diffs[pointer][1] = diffs[pointer - 1][1] +
            diffs[pointer][1].substring(0, diffs[pointer][1].length -
                                        diffs[pointer - 1][1].length);
        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
        diffs.splice(pointer - 1, 1);
        changes = true;
      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==
          diffs[pointer + 1][1]) {
        // Shift the edit over the next equality.
        diffs[pointer - 1][1] += diffs[pointer + 1][1];
        diffs[pointer][1] =
            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
            diffs[pointer + 1][1];
        diffs.splice(pointer + 1, 1);
        changes = true;
      }
    }
    pointer++;
  }
  // If shifts were made, the diff needs reordering and another shift sweep.
  if (changes) {
    this.diff_cleanupMerge(diffs);
  }
};


/**
 * loc is a location in text1, compute and return the equivalent location in
 * text2.
 * e.g. 'The cat' vs 'The big cat', 1->1, 5->8
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @param {number} loc Location within text1.
 * @return {number} Location within text2.
 */
diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {
  var chars1 = 0;
  var chars2 = 0;
  var last_chars1 = 0;
  var last_chars2 = 0;
  var x;
  for (x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {  // Equality or deletion.
      chars1 += diffs[x][1].length;
    }
    if (diffs[x][0] !== DIFF_DELETE) {  // Equality or insertion.
      chars2 += diffs[x][1].length;
    }
    if (chars1 > loc) {  // Overshot the location.
      break;
    }
    last_chars1 = chars1;
    last_chars2 = chars2;
  }
  // Was the location was deleted?
  if (diffs.length != x && diffs[x][0] === DIFF_DELETE) {
    return last_chars2;
  }
  // Add the remaining character length.
  return last_chars2 + (loc - last_chars1);
};


/**
 * Convert a diff array into a pretty HTML report.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} HTML representation.
 */
diff_match_patch.prototype.diff_prettyHtml = function(diffs) {
  var html = [];
  var pattern_amp = /&/g;
  var pattern_lt = /</g;
  var pattern_gt = />/g;
  var pattern_para = /\n/g;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];    // Operation (insert, delete, equal)
    var data = diffs[x][1];  // Text of change.
    var text = data.replace(pattern_amp, '&amp;').replace(pattern_lt, '&lt;')
        .replace(pattern_gt, '&gt;').replace(pattern_para, '&para;<br>');
    switch (op) {
      case DIFF_INSERT:
        html[x] = '<ins style="background:#e6ffe6;">' + text + '</ins>';
        break;
      case DIFF_DELETE:
        html[x] = '<del style="background:#ffe6e6;">' + text + '</del>';
        break;
      case DIFF_EQUAL:
        html[x] = '<span>' + text + '</span>';
        break;
    }
  }
  return html.join('');
};


/**
 * Compute and return the source text (all equalities and deletions).
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Source text.
 */
diff_match_patch.prototype.diff_text1 = function(diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_INSERT) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};


/**
 * Compute and return the destination text (all equalities and insertions).
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Destination text.
 */
diff_match_patch.prototype.diff_text2 = function(diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    if (diffs[x][0] !== DIFF_DELETE) {
      text[x] = diffs[x][1];
    }
  }
  return text.join('');
};


/**
 * Compute the Levenshtein distance; the number of inserted, deleted or
 * substituted characters.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {number} Number of changes.
 */
diff_match_patch.prototype.diff_levenshtein = function(diffs) {
  var levenshtein = 0;
  var insertions = 0;
  var deletions = 0;
  for (var x = 0; x < diffs.length; x++) {
    var op = diffs[x][0];
    var data = diffs[x][1];
    switch (op) {
      case DIFF_INSERT:
        insertions += data.length;
        break;
      case DIFF_DELETE:
        deletions += data.length;
        break;
      case DIFF_EQUAL:
        // A deletion and an insertion is one substitution.
        levenshtein += Math.max(insertions, deletions);
        insertions = 0;
        deletions = 0;
        break;
    }
  }
  levenshtein += Math.max(insertions, deletions);
  return levenshtein;
};


/**
 * Crush the diff into an encoded string which describes the operations
 * required to transform text1 into text2.
 * E.g. =3\t-2\t+ing  -> Keep 3 chars, delete 2 chars, insert 'ing'.
 * Operations are tab-separated.  Inserted text is escaped using %xx notation.
 * @param {!Array.<!diff_match_patch.Diff>} diffs Array of diff tuples.
 * @return {string} Delta text.
 */
diff_match_patch.prototype.diff_toDelta = function(diffs) {
  var text = [];
  for (var x = 0; x < diffs.length; x++) {
    switch (diffs[x][0]) {
      case DIFF_INSERT:
        text[x] = '+' + encodeURI(diffs[x][1]);
        break;
      case DIFF_DELETE:
        text[x] = '-' + diffs[x][1].length;
        break;
      case DIFF_EQUAL:
        text[x] = '=' + diffs[x][1].length;
        break;
    }
  }
  return text.join('\t').replace(/%20/g, ' ');
};


/**
 * Given the original text1, and an encoded string which describes the
 * operations required to transform text1 into text2, compute the full diff.
 * @param {string} text1 Source string for the diff.
 * @param {string} delta Delta text.
 * @return {!Array.<!diff_match_patch.Diff>} Array of diff tuples.
 * @throws {!Error} If invalid input.
 */
diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {
  var diffs = [];
  var diffsLength = 0;  // Keeping our own length var is faster in JS.
  var pointer = 0;  // Cursor in text1
  var tokens = delta.split(/\t/g);
  for (var x = 0; x < tokens.length; x++) {
    // Each token begins with a one character parameter which specifies the
    // operation of this token (delete, insert, equality).
    var param = tokens[x].substring(1);
    switch (tokens[x].charAt(0)) {
      case '+':
        try {
          diffs[diffsLength++] = [DIFF_INSERT, decodeURI(param)];
        } catch (ex) {
          // Malformed URI sequence.
          throw new Error('Illegal escape in diff_fromDelta: ' + param);
        }
        break;
      case '-':
        // Fall through.
      case '=':
        var n = parseInt(param, 10);
        if (isNaN(n) || n < 0) {
          throw new Error('Invalid number in diff_fromDelta: ' + param);
        }
        var text = text1.substring(pointer, pointer += n);
        if (tokens[x].charAt(0) == '=') {
          diffs[diffsLength++] = [DIFF_EQUAL, text];
        } else {
          diffs[diffsLength++] = [DIFF_DELETE, text];
        }
        break;
      default:
        // Blank tokens are ok (from a trailing \t).
        // Anything else is an error.
        if (tokens[x]) {
          throw new Error('Invalid diff operation in diff_fromDelta: ' +
                          tokens[x]);
        }
    }
  }
  if (pointer != text1.length) {
    throw new Error('Delta length (' + pointer +
        ') does not equal source text length (' + text1.length + ').');
  }
  return diffs;
};


//  MATCH FUNCTIONS


/**
 * Locate the best instance of 'pattern' in 'text' near 'loc'.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 */
diff_match_patch.prototype.match_main = function(text, pattern, loc) {
  // Check for null inputs.
  if (text == null || pattern == null || loc == null) {
    throw new Error('Null input. (match_main)');
  }

  loc = Math.max(0, Math.min(loc, text.length));
  if (text == pattern) {
    // Shortcut (potentially not guaranteed by the algorithm)
    return 0;
  } else if (!text.length) {
    // Nothing to match.
    return -1;
  } else if (text.substring(loc, loc + pattern.length) == pattern) {
    // Perfect match at the perfect spot!  (Includes case of null pattern)
    return loc;
  } else {
    // Do a fuzzy compare.
    return this.match_bitap_(text, pattern, loc);
  }
};


/**
 * Locate the best instance of 'pattern' in 'text' near 'loc' using the
 * Bitap algorithm.
 * @param {string} text The text to search.
 * @param {string} pattern The pattern to search for.
 * @param {number} loc The location to search around.
 * @return {number} Best match index or -1.
 * @private
 */
diff_match_patch.prototype.match_bitap_ = function(text, pattern, loc) {
  if (pattern.length > this.Match_MaxBits) {
    throw new Error('Pattern too long for this browser.');
  }

  // Initialise the alphabet.
  var s = this.match_alphabet_(pattern);

  var dmp = this;  // 'this' becomes 'window' in a closure.

  /**
   * Compute and return the score for a match with e errors and x location.
   * Accesses loc and pattern through being a closure.
   * @param {number} e Number of errors in match.
   * @param {number} x Location of match.
   * @return {number} Overall score for match (0.0 = good, 1.0 = bad).
   * @private
   */
  function match_bitapScore_(e, x) {
    var accuracy = e / pattern.length;
    var proximity = Math.abs(loc - x);
    if (!dmp.Match_Distance) {
      // Dodge divide by zero error.
      return proximity ? 1.0 : accuracy;
    }
    return accuracy + (proximity / dmp.Match_Distance);
  }

  // Highest score beyond which we give up.
  var score_threshold = this.Match_Threshold;
  // Is there a nearby exact match? (speedup)
  var best_loc = text.indexOf(pattern, loc);
  if (best_loc != -1) {
    score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
    // What about in the other direction? (speedup)
    best_loc = text.lastIndexOf(pattern, loc + pattern.length);
    if (best_loc != -1) {
      score_threshold =
          Math.min(match_bitapScore_(0, best_loc), score_threshold);
    }
  }

  // Initialise the bit arrays.
  var matchmask = 1 << (pattern.length - 1);
  best_loc = -1;

  var bin_min, bin_mid;
  var bin_max = pattern.length + text.length;
  var last_rd;
  for (var d = 0; d < pattern.length; d++) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from 'loc' we can stray at this
    // error level.
    bin_min = 0;
    bin_mid = bin_max;
    while (bin_min < bin_mid) {
      if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
        bin_min = bin_mid;
      } else {
        bin_max = bin_mid;
      }
      bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
    }
    // Use the result from this iteration as the maximum for the next.
    bin_max = bin_mid;
    var start = Math.max(1, loc - bin_mid + 1);
    var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

    var rd = Array(finish + 2);
    rd[finish + 1] = (1 << d) - 1;
    for (var j = finish; j >= start; j--) {
      // The alphabet (s) is a sparse hash, so the following line generates
      // warnings.
      var charMatch = s[text.charAt(j - 1)];
      if (d === 0) {  // First pass: exact match.
        rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
      } else {  // Subsequent passes: fuzzy match.
        rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
                last_rd[j + 1];
      }
      if (rd[j] & matchmask) {
        var score = match_bitapScore_(d, j - 1);
        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (score <= score_threshold) {
          // Told you so.
          score_threshold = score;
          best_loc = j - 1;
          if (best_loc > loc) {
            // When passing loc, don't exceed our current distance from loc.
            start = Math.max(1, 2 * loc - best_loc);
          } else {
            // Already passed loc, downhill from here on in.
            break;
          }
        }
      }
    }
    // No hope for a (better) match at greater error levels.
    if (match_bitapScore_(d + 1, loc) > score_threshold) {
      break;
    }
    last_rd = rd;
  }
  return best_loc;
};


/**
 * Initialise the alphabet for the Bitap algorithm.
 * @param {string} pattern The text to encode.
 * @return {!Object} Hash of character locations.
 * @private
 */
diff_match_patch.prototype.match_alphabet_ = function(pattern) {
  var s = {};
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] = 0;
  }
  for (var i = 0; i < pattern.length; i++) {
    s[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
  }
  return s;
};


//  PATCH FUNCTIONS


/**
 * Increase the context until it is unique,
 * but don't let the pattern expand beyond Match_MaxBits.
 * @param {!diff_match_patch.patch_obj} patch The patch to grow.
 * @param {string} text Source text.
 * @private
 */
diff_match_patch.prototype.patch_addContext_ = function(patch, text) {
  if (text.length == 0) {
    return;
  }
  var pattern = text.substring(patch.start2, patch.start2 + patch.length1);
  var padding = 0;

  // Look for the first and last matches of pattern in text.  If two different
  // matches are found, increase the pattern length.
  while (text.indexOf(pattern) != text.lastIndexOf(pattern) &&
         pattern.length < this.Match_MaxBits - this.Patch_Margin -
         this.Patch_Margin) {
    padding += this.Patch_Margin;
    pattern = text.substring(patch.start2 - padding,
                             patch.start2 + patch.length1 + padding);
  }
  // Add one chunk for good luck.
  padding += this.Patch_Margin;

  // Add the prefix.
  var prefix = text.substring(patch.start2 - padding, patch.start2);
  if (prefix) {
    patch.diffs.unshift([DIFF_EQUAL, prefix]);
  }
  // Add the suffix.
  var suffix = text.substring(patch.start2 + patch.length1,
                              patch.start2 + patch.length1 + padding);
  if (suffix) {
    patch.diffs.push([DIFF_EQUAL, suffix]);
  }

  // Roll back the start points.
  patch.start1 -= prefix.length;
  patch.start2 -= prefix.length;
  // Extend the lengths.
  patch.length1 += prefix.length + suffix.length;
  patch.length2 += prefix.length + suffix.length;
};


/**
 * Compute a list of patches to turn text1 into text2.
 * Use diffs if provided, otherwise compute it ourselves.
 * There are four ways to call this function, depending on what data is
 * available to the caller:
 * Method 1:
 * a = text1, b = text2
 * Method 2:
 * a = diffs
 * Method 3 (optimal):
 * a = text1, b = diffs
 * Method 4 (deprecated, use method 3):
 * a = text1, b = text2, c = diffs
 *
 * @param {string|!Array.<!diff_match_patch.Diff>} a text1 (methods 1,3,4) or
 * Array of diff tuples for text1 to text2 (method 2).
 * @param {string|!Array.<!diff_match_patch.Diff>} opt_b text2 (methods 1,4) or
 * Array of diff tuples for text1 to text2 (method 3) or undefined (method 2).
 * @param {string|!Array.<!diff_match_patch.Diff>} opt_c Array of diff tuples
 * for text1 to text2 (method 4) or undefined (methods 1,2,3).
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 */
diff_match_patch.prototype.patch_make = function(a, opt_b, opt_c) {
  var text1, diffs;
  if (typeof a == 'string' && typeof opt_b == 'string' &&
      typeof opt_c == 'undefined') {
    // Method 1: text1, text2
    // Compute diffs from text1 and text2.
    text1 = /** @type {string} */(a);
    diffs = this.diff_main(text1, /** @type {string} */(opt_b), true);
    if (diffs.length > 2) {
      this.diff_cleanupSemantic(diffs);
      this.diff_cleanupEfficiency(diffs);
    }
  } else if (a && typeof a == 'object' && typeof opt_b == 'undefined' &&
      typeof opt_c == 'undefined') {
    // Method 2: diffs
    // Compute text1 from diffs.
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(a);
    text1 = this.diff_text1(diffs);
  } else if (typeof a == 'string' && opt_b && typeof opt_b == 'object' &&
      typeof opt_c == 'undefined') {
    // Method 3: text1, diffs
    text1 = /** @type {string} */(a);
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_b);
  } else if (typeof a == 'string' && typeof opt_b == 'string' &&
      opt_c && typeof opt_c == 'object') {
    // Method 4: text1, text2, diffs
    // text2 is not used.
    text1 = /** @type {string} */(a);
    diffs = /** @type {!Array.<!diff_match_patch.Diff>} */(opt_c);
  } else {
    throw new Error('Unknown call format to patch_make.');
  }

  if (diffs.length === 0) {
    return [];  // Get rid of the null case.
  }
  var patches = [];
  var patch = new diff_match_patch.patch_obj();
  var patchDiffLength = 0;  // Keeping our own length var is faster in JS.
  var char_count1 = 0;  // Number of characters into the text1 string.
  var char_count2 = 0;  // Number of characters into the text2 string.
  // Start with text1 (prepatch_text) and apply the diffs until we arrive at
  // text2 (postpatch_text).  We recreate the patches one by one to determine
  // context info.
  var prepatch_text = text1;
  var postpatch_text = text1;
  for (var x = 0; x < diffs.length; x++) {
    var diff_type = diffs[x][0];
    var diff_text = diffs[x][1];

    if (!patchDiffLength && diff_type !== DIFF_EQUAL) {
      // A new patch starts here.
      patch.start1 = char_count1;
      patch.start2 = char_count2;
    }

    switch (diff_type) {
      case DIFF_INSERT:
        patch.diffs[patchDiffLength++] = diffs[x];
        patch.length2 += diff_text.length;
        postpatch_text = postpatch_text.substring(0, char_count2) + diff_text +
                         postpatch_text.substring(char_count2);
        break;
      case DIFF_DELETE:
        patch.length1 += diff_text.length;
        patch.diffs[patchDiffLength++] = diffs[x];
        postpatch_text = postpatch_text.substring(0, char_count2) +
                         postpatch_text.substring(char_count2 +
                             diff_text.length);
        break;
      case DIFF_EQUAL:
        if (diff_text.length <= 2 * this.Patch_Margin &&
            patchDiffLength && diffs.length != x + 1) {
          // Small equality inside a patch.
          patch.diffs[patchDiffLength++] = diffs[x];
          patch.length1 += diff_text.length;
          patch.length2 += diff_text.length;
        } else if (diff_text.length >= 2 * this.Patch_Margin) {
          // Time for a new patch.
          if (patchDiffLength) {
            this.patch_addContext_(patch, prepatch_text);
            patches.push(patch);
            patch = new diff_match_patch.patch_obj();
            patchDiffLength = 0;
            // Unlike Unidiff, our patch lists have a rolling context.
            // http://code.google.com/p/google-diff-match-patch/wiki/Unidiff
            // Update prepatch text & pos to reflect the application of the
            // just completed patch.
            prepatch_text = postpatch_text;
            char_count1 = char_count2;
          }
        }
        break;
    }

    // Update the current character count.
    if (diff_type !== DIFF_INSERT) {
      char_count1 += diff_text.length;
    }
    if (diff_type !== DIFF_DELETE) {
      char_count2 += diff_text.length;
    }
  }
  // Pick up the leftover patch if not empty.
  if (patchDiffLength) {
    this.patch_addContext_(patch, prepatch_text);
    patches.push(patch);
  }

  return patches;
};


/**
 * Given an array of patches, return another array that is identical.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 */
diff_match_patch.prototype.patch_deepCopy = function(patches) {
  // Making deep copies is hard in JavaScript.
  var patchesCopy = [];
  for (var x = 0; x < patches.length; x++) {
    var patch = patches[x];
    var patchCopy = new diff_match_patch.patch_obj();
    patchCopy.diffs = [];
    for (var y = 0; y < patch.diffs.length; y++) {
      patchCopy.diffs[y] = patch.diffs[y].slice();
    }
    patchCopy.start1 = patch.start1;
    patchCopy.start2 = patch.start2;
    patchCopy.length1 = patch.length1;
    patchCopy.length2 = patch.length2;
    patchesCopy[x] = patchCopy;
  }
  return patchesCopy;
};


/**
 * Merge a set of patches onto the text.  Return a patched text, as well
 * as a list of true/false values indicating which patches were applied.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @param {string} text Old text.
 * @return {!Array.<string|!Array.<boolean>>} Two element Array, containing the
 *      new text and an array of boolean values.
 */
diff_match_patch.prototype.patch_apply = function(patches, text) {
  if (patches.length == 0) {
    return [text, []];
  }

  // Deep copy the patches so that no changes are made to originals.
  patches = this.patch_deepCopy(patches);

  var nullPadding = this.patch_addPadding(patches);
  text = nullPadding + text + nullPadding;

  this.patch_splitMax(patches);
  // delta keeps track of the offset between the expected and actual location
  // of the previous patch.  If there are patches expected at positions 10 and
  // 20, but the first patch was found at 12, delta is 2 and the second patch
  // has an effective expected position of 22.
  var delta = 0;
  var results = [];
  for (var x = 0; x < patches.length; x++) {
    var expected_loc = patches[x].start2 + delta;
    var text1 = this.diff_text1(patches[x].diffs);
    var start_loc;
    var end_loc = -1;
    if (text1.length > this.Match_MaxBits) {
      // patch_splitMax will only provide an oversized pattern in the case of
      // a monster delete.
      start_loc = this.match_main(text, text1.substring(0, this.Match_MaxBits),
                                  expected_loc);
      if (start_loc != -1) {
        end_loc = this.match_main(text,
            text1.substring(text1.length - this.Match_MaxBits),
            expected_loc + text1.length - this.Match_MaxBits);
        if (end_loc == -1 || start_loc >= end_loc) {
          // Can't find valid trailing context.  Drop this patch.
          start_loc = -1;
        }
      }
    } else {
      start_loc = this.match_main(text, text1, expected_loc);
    }
    if (start_loc == -1) {
      // No match found.  :(
      results[x] = false;
      // Subtract the delta for this failed patch from subsequent patches.
      delta -= patches[x].length2 - patches[x].length1;
    } else {
      // Found a match.  :)
      results[x] = true;
      delta = start_loc - expected_loc;
      var text2;
      if (end_loc == -1) {
        text2 = text.substring(start_loc, start_loc + text1.length);
      } else {
        text2 = text.substring(start_loc, end_loc + this.Match_MaxBits);
      }
      if (text1 == text2) {
        // Perfect match, just shove the replacement text in.
        text = text.substring(0, start_loc) +
               this.diff_text2(patches[x].diffs) +
               text.substring(start_loc + text1.length);
      } else {
        // Imperfect match.  Run a diff to get a framework of equivalent
        // indices.
        var diffs = this.diff_main(text1, text2, false);
        if (text1.length > this.Match_MaxBits &&
            this.diff_levenshtein(diffs) / text1.length >
            this.Patch_DeleteThreshold) {
          // The end points match, but the content is unacceptably bad.
          results[x] = false;
        } else {
          this.diff_cleanupSemanticLossless(diffs);
          var index1 = 0;
          var index2;
          for (var y = 0; y < patches[x].diffs.length; y++) {
            var mod = patches[x].diffs[y];
            if (mod[0] !== DIFF_EQUAL) {
              index2 = this.diff_xIndex(diffs, index1);
            }
            if (mod[0] === DIFF_INSERT) {  // Insertion
              text = text.substring(0, start_loc + index2) + mod[1] +
                     text.substring(start_loc + index2);
            } else if (mod[0] === DIFF_DELETE) {  // Deletion
              text = text.substring(0, start_loc + index2) +
                     text.substring(start_loc + this.diff_xIndex(diffs,
                         index1 + mod[1].length));
            }
            if (mod[0] !== DIFF_DELETE) {
              index1 += mod[1].length;
            }
          }
        }
      }
    }
  }
  // Strip the padding off.
  text = text.substring(nullPadding.length, text.length - nullPadding.length);
  return [text, results];
};


/**
 * Add some padding on text start and end so that edges can match something.
 * Intended to be called only from within patch_apply.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {string} The padding string added to each side.
 */
diff_match_patch.prototype.patch_addPadding = function(patches) {
  var paddingLength = this.Patch_Margin;
  var nullPadding = '';
  for (var x = 1; x <= paddingLength; x++) {
    nullPadding += String.fromCharCode(x);
  }

  // Bump all the patches forward.
  for (var x = 0; x < patches.length; x++) {
    patches[x].start1 += paddingLength;
    patches[x].start2 += paddingLength;
  }

  // Add some padding on start of first diff.
  var patch = patches[0];
  var diffs = patch.diffs;
  if (diffs.length == 0 || diffs[0][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.unshift([DIFF_EQUAL, nullPadding]);
    patch.start1 -= paddingLength;  // Should be 0.
    patch.start2 -= paddingLength;  // Should be 0.
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[0][1].length) {
    // Grow first equality.
    var extraLength = paddingLength - diffs[0][1].length;
    diffs[0][1] = nullPadding.substring(diffs[0][1].length) + diffs[0][1];
    patch.start1 -= extraLength;
    patch.start2 -= extraLength;
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  // Add some padding on end of last diff.
  patch = patches[patches.length - 1];
  diffs = patch.diffs;
  if (diffs.length == 0 || diffs[diffs.length - 1][0] != DIFF_EQUAL) {
    // Add nullPadding equality.
    diffs.push([DIFF_EQUAL, nullPadding]);
    patch.length1 += paddingLength;
    patch.length2 += paddingLength;
  } else if (paddingLength > diffs[diffs.length - 1][1].length) {
    // Grow last equality.
    var extraLength = paddingLength - diffs[diffs.length - 1][1].length;
    diffs[diffs.length - 1][1] += nullPadding.substring(0, extraLength);
    patch.length1 += extraLength;
    patch.length2 += extraLength;
  }

  return nullPadding;
};


/**
 * Look through the patches and break up any which are longer than the maximum
 * limit of the match algorithm.
 * Intended to be called only from within patch_apply.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 */
diff_match_patch.prototype.patch_splitMax = function(patches) {
  var patch_size = this.Match_MaxBits;
  for (var x = 0; x < patches.length; x++) {
    if (patches[x].length1 <= patch_size) {
      continue;
    }
    var bigpatch = patches[x];
    // Remove the big old patch.
    patches.splice(x--, 1);
    var start1 = bigpatch.start1;
    var start2 = bigpatch.start2;
    var precontext = '';
    while (bigpatch.diffs.length !== 0) {
      // Create one of several smaller patches.
      var patch = new diff_match_patch.patch_obj();
      var empty = true;
      patch.start1 = start1 - precontext.length;
      patch.start2 = start2 - precontext.length;
      if (precontext !== '') {
        patch.length1 = patch.length2 = precontext.length;
        patch.diffs.push([DIFF_EQUAL, precontext]);
      }
      while (bigpatch.diffs.length !== 0 &&
             patch.length1 < patch_size - this.Patch_Margin) {
        var diff_type = bigpatch.diffs[0][0];
        var diff_text = bigpatch.diffs[0][1];
        if (diff_type === DIFF_INSERT) {
          // Insertions are harmless.
          patch.length2 += diff_text.length;
          start2 += diff_text.length;
          patch.diffs.push(bigpatch.diffs.shift());
          empty = false;
        } else if (diff_type === DIFF_DELETE && patch.diffs.length == 1 &&
                   patch.diffs[0][0] == DIFF_EQUAL &&
                   diff_text.length > 2 * patch_size) {
          // This is a large deletion.  Let it pass in one chunk.
          patch.length1 += diff_text.length;
          start1 += diff_text.length;
          empty = false;
          patch.diffs.push([diff_type, diff_text]);
          bigpatch.diffs.shift();
        } else {
          // Deletion or equality.  Only take as much as we can stomach.
          diff_text = diff_text.substring(0,
              patch_size - patch.length1 - this.Patch_Margin);
          patch.length1 += diff_text.length;
          start1 += diff_text.length;
          if (diff_type === DIFF_EQUAL) {
            patch.length2 += diff_text.length;
            start2 += diff_text.length;
          } else {
            empty = false;
          }
          patch.diffs.push([diff_type, diff_text]);
          if (diff_text == bigpatch.diffs[0][1]) {
            bigpatch.diffs.shift();
          } else {
            bigpatch.diffs[0][1] =
                bigpatch.diffs[0][1].substring(diff_text.length);
          }
        }
      }
      // Compute the head context for the next patch.
      precontext = this.diff_text2(patch.diffs);
      precontext =
          precontext.substring(precontext.length - this.Patch_Margin);
      // Append the end context for this patch.
      var postcontext = this.diff_text1(bigpatch.diffs)
                            .substring(0, this.Patch_Margin);
      if (postcontext !== '') {
        patch.length1 += postcontext.length;
        patch.length2 += postcontext.length;
        if (patch.diffs.length !== 0 &&
            patch.diffs[patch.diffs.length - 1][0] === DIFF_EQUAL) {
          patch.diffs[patch.diffs.length - 1][1] += postcontext;
        } else {
          patch.diffs.push([DIFF_EQUAL, postcontext]);
        }
      }
      if (!empty) {
        patches.splice(++x, 0, patch);
      }
    }
  }
};


/**
 * Take a list of patches and return a textual representation.
 * @param {!Array.<!diff_match_patch.patch_obj>} patches Array of Patch objects.
 * @return {string} Text representation of patches.
 */
diff_match_patch.prototype.patch_toText = function(patches) {
  var text = [];
  for (var x = 0; x < patches.length; x++) {
    text[x] = patches[x];
  }
  return text.join('');
};


/**
 * Parse a textual representation of patches and return a list of Patch objects.
 * @param {string} textline Text representation of patches.
 * @return {!Array.<!diff_match_patch.patch_obj>} Array of Patch objects.
 * @throws {!Error} If invalid input.
 */
diff_match_patch.prototype.patch_fromText = function(textline) {
  var patches = [];
  if (!textline) {
    return patches;
  }
  var text = textline.split('\n');
  var textPointer = 0;
  var patchHeader = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
  while (textPointer < text.length) {
    var m = text[textPointer].match(patchHeader);
    if (!m) {
      throw new Error('Invalid patch string: ' + text[textPointer]);
    }
    var patch = new diff_match_patch.patch_obj();
    patches.push(patch);
    patch.start1 = parseInt(m[1], 10);
    if (m[2] === '') {
      patch.start1--;
      patch.length1 = 1;
    } else if (m[2] == '0') {
      patch.length1 = 0;
    } else {
      patch.start1--;
      patch.length1 = parseInt(m[2], 10);
    }

    patch.start2 = parseInt(m[3], 10);
    if (m[4] === '') {
      patch.start2--;
      patch.length2 = 1;
    } else if (m[4] == '0') {
      patch.length2 = 0;
    } else {
      patch.start2--;
      patch.length2 = parseInt(m[4], 10);
    }
    textPointer++;

    while (textPointer < text.length) {
      var sign = text[textPointer].charAt(0);
      try {
        var line = decodeURI(text[textPointer].substring(1));
      } catch (ex) {
        // Malformed URI sequence.
        throw new Error('Illegal escape in patch_fromText: ' + line);
      }
      if (sign == '-') {
        // Deletion.
        patch.diffs.push([DIFF_DELETE, line]);
      } else if (sign == '+') {
        // Insertion.
        patch.diffs.push([DIFF_INSERT, line]);
      } else if (sign == ' ') {
        // Minor equality.
        patch.diffs.push([DIFF_EQUAL, line]);
      } else if (sign == '@') {
        // Start of next patch.
        break;
      } else if (sign === '') {
        // Blank line?  Whatever.
      } else {
        // WTF?
        throw new Error('Invalid patch mode "' + sign + '" in: ' + line);
      }
      textPointer++;
    }
  }
  return patches;
};


/**
 * Class representing one patch operation.
 * @constructor
 */
diff_match_patch.patch_obj = function() {
  /** @type {!Array.<!diff_match_patch.Diff>} */
  this.diffs = [];
  /** @type {?number} */
  this.start1 = null;
  /** @type {?number} */
  this.start2 = null;
  /** @type {number} */
  this.length1 = 0;
  /** @type {number} */
  this.length2 = 0;
};


/**
 * Emmulate GNU diff's format.
 * Header: @@ -382,8 +481,9 @@
 * Indicies are printed as 1-based, not 0-based.
 * @return {string} The GNU diff string.
 */
diff_match_patch.patch_obj.prototype.toString = function() {
  var coords1, coords2;
  if (this.length1 === 0) {
    coords1 = this.start1 + ',0';
  } else if (this.length1 == 1) {
    coords1 = this.start1 + 1;
  } else {
    coords1 = (this.start1 + 1) + ',' + this.length1;
  }
  if (this.length2 === 0) {
    coords2 = this.start2 + ',0';
  } else if (this.length2 == 1) {
    coords2 = this.start2 + 1;
  } else {
    coords2 = (this.start2 + 1) + ',' + this.length2;
  }
  var text = ['@@ -' + coords1 + ' +' + coords2 + ' @@\n'];
  var op;
  // Escape the body of the patch with %xx notation.
  for (var x = 0; x < this.diffs.length; x++) {
    switch (this.diffs[x][0]) {
      case DIFF_INSERT:
        op = '+';
        break;
      case DIFF_DELETE:
        op = '-';
        break;
      case DIFF_EQUAL:
        op = ' ';
        break;
    }
    text[x + 1] = op + encodeURI(this.diffs[x][1]) + '\n';
  }
  return text.join('').replace(/%20/g, ' ');
};


// The following export code was added by @ForbesLindesay
module.exports = diff_match_patch;
module.exports['diff_match_patch'] = diff_match_patch;
module.exports['DIFF_DELETE'] = DIFF_DELETE;
module.exports['DIFF_INSERT'] = DIFF_INSERT;
module.exports['DIFF_EQUAL'] = DIFF_EQUAL;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"td-loading-roller\" *ngIf=\"active\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-text-diff/src/lib/ngx-text-diff.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ngx-text-diff/src/lib/ngx-text-diff.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<td-loader-spinner [active]=\"loading\"></td-loader-spinner>\r\n<div class=\"td-wrapper\" [ngClass]=\"outerContainerClass\" [ngStyle]=\"outerContainerStyle\" *ngIf=\"!loading\">\r\n\r\n  <div [ngClass]=\"toolbarClass\" [ngStyle]=\"toolbarStyle\" *ngIf=\"showToolbar\">\r\n    <div class=\"td-toolbar-show-diff\">\r\n      <label class=\"td-checkbox-container\">\r\n        Only Show Lines with Differences ({{ diffsCount }})\r\n        <input type=\"checkbox\" id=\"showDiffs\" [ngModel]=\"hideMatchingLines\" (ngModelChange)=\"hideMatchingLinesChanged($event)\" />\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"td-toolbar-select-format\" *ngIf=\"showToolbar && showBtnToolbar\">\r\n    <div class=\"td-btn-group td-btn-group-toggle\" data-toggle=\"buttons\">\r\n      <button\r\n        *ngFor=\"let option of formatOptions\"\r\n        [ngClass]=\"{ active: format === option.value, disabled: !!option.disabled }\"\r\n        [name]=\"option.name\"\r\n        [id]=\"option.id\"\r\n        [disabled]=\"!!option.disabled\"\r\n        (click)=\"setDiffTableFormat(option.value)\"\r\n      >\r\n        {{ option.label }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"td-table-wrapper\" [ngClass]=\"compareRowsClass\" [ngStyle]=\"compareRowsStyle\">\r\n    <!-- Right side-by-side -->\r\n    <div class=\"td-table-container side-by-side\" *ngIf=\"format === 'SideBySide'\" id=\"td-left-compare-container\" tdContainer cdkScrollable>\r\n      <table class=\"td-table\">\r\n        <tbody>\r\n          <tr *ngFor=\"let row of filteredTableRows; trackBy: trackTableRows\">\r\n            <td\r\n              scope=\"row\"\r\n              class=\"fit-column line-number-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\r\n            >\r\n              {{ row.leftContent?.lineNumber !== -1 ? row.leftContent?.lineNumber : ' ' }}\r\n            </td>\r\n            <td\r\n              class=\"fit-column prefix-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\r\n            >\r\n              <span>{{ row.leftContent?.prefix || ' ' }}</span>\r\n            </td>\r\n            <td\r\n              class=\"content-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\r\n              *ngIf=\"!row.hasDiffs\"\r\n            >\r\n              <span [innerHTML]=\"row.leftContent?.lineContent | formatLine\"></span>\r\n            </td>\r\n            <td\r\n              class=\"content-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'empty-row': !row.leftContent?.lineContent }\"\r\n              *ngIf=\"row.hasDiffs\"\r\n            >\r\n              <span\r\n                [innerHTML]=\"diff.content | formatLine\"\r\n                [ngClass]=\"{ highlight: diff.isDiff }\"\r\n                *ngFor=\"let diff of row.leftContent?.lineDiffs; trackBy: trackDiffs\"\r\n              ></span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- Left side-by-side -->\r\n    <div class=\"td-table-container side-by-side\" *ngIf=\"format === 'SideBySide'\" id=\"td-right-compare-container\" tdContainer cdkScrollable>\r\n      <table class=\"td-table\">\r\n        <tbody>\r\n          <tr *ngFor=\"let row of filteredTableRows; trackBy: trackTableRows\">\r\n            <td\r\n              scope=\"row\"\r\n              class=\"fit-column line-number-col\"\r\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\r\n            >\r\n              {{ row.rightContent?.lineNumber !== -1 ? row.rightContent?.lineNumber : ' ' }}\r\n            </td>\r\n            <td\r\n              class=\"fit-column prefix-col\"\r\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\r\n            >\r\n              <span>{{ row.rightContent?.prefix || ' ' }}</span>\r\n            </td>\r\n            <td\r\n              class=\"content-col\"\r\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\r\n              *ngIf=\"!row.hasDiffs\"\r\n            >\r\n              <span [innerHTML]=\"row.rightContent?.lineContent | formatLine\"></span>\r\n            </td>\r\n            <td\r\n              class=\"content-col\"\r\n              [ngClass]=\"{ 'insert-row': row.rightContent?.prefix === '+', 'empty-row': !row.rightContent?.lineContent }\"\r\n              *ngIf=\"row.hasDiffs\"\r\n            >\r\n              <span\r\n                [innerHTML]=\"diff.content | formatLine\"\r\n                [ngClass]=\"{ highlight: diff.isDiff }\"\r\n                *ngFor=\"let diff of row.rightContent?.lineDiffs; trackBy: trackDiffs\"\r\n              ></span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!-- Line By Line - combined table -->\r\n    <div class=\"td-table-container line-by-line\" *ngIf=\"format === 'LineByLine'\">\r\n      <table class=\"td-table\">\r\n        <tbody>\r\n          <tr *ngFor=\"let row of filteredTableRowsLineByLine; trackBy: trackTableRows\">\r\n            <td scope=\"row\" class=\"fit-column line-number-col-left\">{{ row.leftContent?.lineNumber }}</td>\r\n            <td scope=\"row\" class=\"fit-column line-number-col\">{{ row.rightContent?.lineNumber }}</td>\r\n            <td\r\n              class=\"fit-column prefix-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\r\n            >\r\n              <span>{{ row.leftContent?.prefix || row.rightContent?.prefix || ' ' }}</span>\r\n            </td>\r\n            <td\r\n              class=\"content-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\r\n              *ngIf=\"!row.hasDiffs\"\r\n            >\r\n              <span [innerHTML]=\"row.leftContent?.lineContent | formatLine\"></span>\r\n            </td>\r\n            <td\r\n              class=\"content-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\r\n              *ngIf=\"row.hasDiffs && row.leftContent && row.leftContent?.lineDiffs.length !== 0\"\r\n            >\r\n              <span\r\n                [innerHTML]=\"diff.content | formatLine\"\r\n                [ngClass]=\"{ highlight: diff.isDiff }\"\r\n                *ngFor=\"let diff of row.leftContent?.lineDiffs; trackBy: trackDiffs\"\r\n              ></span>\r\n            </td>\r\n            <td\r\n              class=\"content-col\"\r\n              [ngClass]=\"{ 'delete-row': row.leftContent?.prefix === '-', 'insert-row': row.rightContent?.prefix === '+' }\"\r\n              *ngIf=\"row.hasDiffs && row.rightContent && row.rightContent?.lineDiffs.length !== 0\"\r\n            >\r\n              <span\r\n                [innerHTML]=\"diff.content | formatLine\"\r\n                [ngClass]=\"{ highlight: diff.isDiff }\"\r\n                *ngFor=\"let diff of row.rightContent?.lineDiffs; trackBy: trackDiffs\"\r\n              ></span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container-fluid\">\n  <header>\n    <div class=\"container\">\n      <h1>NGX Text Diffs</h1>\n    </div>\n  </header>\n  <div class=\"main-content\">\n    <div class=\"container\">\n      <form>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"leftContent\" class=\"font-weight-bold\">Left Content:</label>\n            <tda-code-editor\n              [options]=\"options\"\n              [ngModel]=\"content.leftContent\"\n              [name]=\"'leftContent'\"\n              [autoFocus]=\"true\"\n              (ngModelChange)=\"handleChange('left',$event)\"\n            ></tda-code-editor>\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"rightContent\" class=\"font-weight-bold\">Right Content:</label>\n            <tda-code-editor\n              [options]=\"options\"\n              [ngModel]=\"content.rightContent\"\n              [name]=\"'rightContent'\"\n              [autoFocus]=\"false\"\n              (ngModelChange)=\"handleChange('right',$event)\"\n            ></tda-code-editor>\n          </div>\n        </div>\n        <button type=\"submit\" (click)=\"submitComparison()\" class=\"btn btn-primary\">Compare</button>\n      </form>\n      <div *ngIf=\"submitted\">\n        <td-ngx-text-diff\n          [left]=\"content.leftContent\"\n          [right]=\"content.rightContent\"\n          [loading]=\"!submitted\"\n          [diffContent]=\"contentObservable$\"\n          [synchronizeScrolling]=\"true\"\n          [compareRowsStyle]=\"{'max-height': '500px', 'overflow': 'auto'}\"\n          (compareResults)=\"onCompareResults($event)\"\n        >\n        </td-ngx-text-diff>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <header>\n    <div class=\"container\">\n      <h2><b>File Compare</b></h2>\n    </div>\n  </header>\n  <div class=\"main-content\">\n    <div class=\"container\">\n      <form>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"leftContent\" class=\"font-weight-bold\"> <input id=\"file-upload\" \n              type=\"file\" \n              accept=\".txt\" \n              (change)=\"fileUpload($event)\">\n              <div>\n               <textarea rows=\"10\" cols=\"50\">{{FileText}}</textarea> -->\n<header class=\"header ng-scope\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header d-flex align-items-center justify-content-between\">\n      <div class=\"brand-logo\">\n        <img src=\"assets/images/yantra_logo.jpg\">\n      </div>\n      <!-- <img ng-show=\"tenant_id == 1\" src=\"assets/images/logo_nd.jpg\" alt=\"person\"> -->\n      <!-- <div class=\"company_name\"> \n                        <h4>{{}}</h4>\n                      </div> -->\n    </div>\n  </div>\n</header>\n\n<!-- *ngFor=\"let country of countries\" value= {{country.id}} -->\n<div class=\"container-fluid\">\n  <!-- <div class=\"home-back\">\n    <a href=\"https://mms2.yantra24x7.com/\"><span>\n        <mat-icon class=\"back\">arrow_back</mat-icon>\n      </span>Back</a>\n  </div> -->\n  <!-- <div class=\"col clock_all\">\n    <div class=\"clock_top\">\n      <span>Date:</span>\n      18/09/2020\n    </div>\n    <div class=\"clock_top\">\n      <span>Time:</span>\n      7.22.33AM\n    </div>\n  </div> -->\n  <div class=\"file-path\">\n    <div class=\"label\">\n      <label>Select Machine : </label>\n      <select (change)=\"onSelect($event.target.value)\">\n\n        <option *ngFor=\"let machine of machinesArray\" [value]=\"machine.id\">{{machine.machine_name}}</option>\n      </select>\n    </div>\n    <p> <span>File Path :</span> {{file_path ? file_path['file_path'] : ''}} </p>\n  </div>\n  <div class=\"page-title\">\n\n    <h2>File Compare</h2>\n    <button type=\"submit\" (click)=\"submitComparison()\" class=\"upload_btn\" (click)=\"toggle()\" id=\"bt\"\n      [disabled]=\"!file_name || !fileName1 \">{{buttonName}}</button>\n  </div>\n\n\n  <div class=\"main-content\">\n\n    <form [formGroup]=\"\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <div for=\"leftContent\" class=\"left_content\">\n            <div class=\"input-group\">\n              <div class=\"custom-file\">\n                <input type=\"file\" [(ngModel)]=\"file_name\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"custom-file-input\" aria-describedby=\"inputGroupFileAddon01\" id=\"file-upload\" accept=\".txt\"\n                  (change)=\"fileUpload($event)\">\n                <label class=\"custom-file-label\" for=\"inputGroupFile01\">{{filName || \"Choose file\"}}</label>\n              </div>\n            </div>\n            <div>\n              <!-- <textarea rows=\"10\" cols=\"50\">{{FileText}}</textarea> -->\n            </div>\n          </div>\n          <!-- <tda-code-editor\n                          [options]=\"options\"\n                          [ngModel]=\"content.leftContent\"\n                          [name]=\"'leftContent'\"\n                          [autoFocus]=\"true\"\n                          (focus)=\"handleChange('left',content.leftContent)\"\n                          (ngModelChange)=\"handleChange('left',$event)\"\n                        ></tda-code-editor>  -->\n        </div>\n        <div class=\"form-group col-md-6\">\n          <div for=\"rightContent\" class=\"right_content\">\n            <div class=\"input-group\">\n              <div class=\"custom-file\">\n                <input type=\"file\" [(ngModel)]=\"fileName1\" [ngModelOptions]=\"{standalone: true}\"\n                  class=\"custom-file-input\" aria-describedby=\"inputGroupFileAddon01\" id=\"file-upload\" accept=\".txt\"\n                  type=\"file\" (change)=\"fileUpload1($event)\">\n                <label class=\"custom-file-label\" for=\"inputGroupFile01\">{{filName1 || \"Choose file\"}}</label>\n              </div>\n            </div>\n            <div>\n              <!-- <textarea rows=\"10\" cols=\"50\">{{filetext1}}</textarea> -->\n            </div>\n          </div>\n          <!-- <tda-code-editor\n                          [options]=\"options\"\n                          [ngModel]=\"content.rightContent\"\n                          [name]=\"'rightContent'\"\n                          [autoFocus]=\"false\"\n                          (focus)=\"handleChange('right',content.rightContent)\"\n                          (ngModelChange)=\"handleChange('right',$event)\"\n                        ></tda-code-editor> -->\n\n\n        </div>\n\n      </div>\n\n    </form>\n    <div class=\"compare_table\" *ngIf=\"submitted\">\n      <td-ngx-text-diff [left]=\"content.leftContent\" [right]=\"content.rightContent\" [loading]=\"!submitted\"\n        [diffContent]=\"contentObservable$\" [synchronizeScrolling]=\"true\"\n        [compareRowsStyle]=\"{'max-height': '500px', 'overflow': 'auto'}\" (compareResults)=\"onCompareResults($event)\">\n      </td-ngx-text-diff>\n    </div>\n  </div>\n  <div>\n    <form [formGroup]=\"login\" (ngSubmit)=\"logintest(login.value)\" *ngIf=\"Compare\">\n      <div class=\"container mb-3\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n          <!-- <div class=\"input-label\">\n                              <label class='home-label'>Changed By</label>\n                              <mat-form-field>\n                                  <input matInput formControlName=\"name\" type=\"text\" placeholder=\"Enter Your Name\" required>\n                                  \n                                </mat-form-field>\n                            </div> -->\n\n          <!-- <div>\n                              <label class='home-label'>Date</label>\n                              <mat-form-field>\n                                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]='date' (dateChange)='change($event)' (click)=\"picker.open()\"   [max]=\"maxDate\" [ngModelOptions]=\"{standalone: true}\">\n                                 <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                 <mat-datepicker #picker></mat-datepicker>\n                              </mat-form-field>\n                            </div> -->\n\n          <!-- <div class=\"input-label\">\n                              <label class='home-label'>Old Revision Number</label>\n                              <mat-form-field>\n                                  <input matInput formControlName=\"old_revision_no\" type=\"text\"  (keypress)=\"keyPress($event)\"   placeholder=\"Enter Your Old Revision Number\" required>\n                            </mat-form-field>\n                          </div> -->\n          </div>\n          <div class=\"col-md-6\">\n            <!-- <div class=\"input-label\">\n                              <label class='home-label'>New Revision Number</label>\n                              <mat-form-field>\n                                    <input matInput formControlName=\"new_revision_no\" (keypress)=\"keyPress($event)\"   type=\"text\" placeholder=\"Enter Your New Revision Number\" required>\n                              </mat-form-field>\n                            </div> -->\n\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Reason</mat-label>\n              <textarea class=\"base\" matInput formControlName=\"reason\" type=\"text\" required></textarea>\n            </mat-form-field>\n\n            <div class=\"submit-btn\">\n              <button class=\"btn btn-primary\" [disabled]=\"login.invalid\">submit</button>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n\n          </div>\n        </div>\n      </div>\n\n\n\n    </form>\n\n\n\n  </div>\n</div><br>\n<br>\n\n\n<footer class=\"main-footer ng-scope\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-right\">\n        <p>Powered by<a target=\"blank\" href=\"https://www.altiussolution.com\" class=\"external\"><img\n              src=\"/assets/images/favicon.png\" style=\"height: 25px;\">Yantra24x7</a></p>\n      </div>\n    </div>\n  </div>\n</footer>\n<div ng-include=\"'footer.html'\"></div>");

/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/format-line.pipe.ts":
/*!************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/format-line.pipe.ts ***!
  \************************************************************/
/*! exports provided: FormatLinePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatLinePipe", function() { return FormatLinePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormatLinePipe = class FormatLinePipe {
    transform(line, diffs) {
        if (!line) {
            return ' ';
        }
        if (!!diffs && diffs.length > 0) {
            /*diffs.forEach(diff => {
              line = line.replace(diff, `<span class="highli">${diff}</span>`);
            });*/
        }
        return line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/ /g, '&nbsp;');
    }
};
FormatLinePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'formatLine'
    })
], FormatLinePipe);



/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.css":
/*!************************************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".td-loading-roller {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n  .td-loading-roller div {\r\n    -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    -webkit-transform-origin: 32px 32px;\r\n            transform-origin: 32px 32px;\r\n  }\r\n  .td-loading-roller div:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 6px;\r\n    border-radius: 50%;\r\n    background: #000;\r\n    margin: -3px 0 0 -3px;\r\n  }\r\n  .td-loading-roller div:nth-child(1) {\r\n    -webkit-animation-delay: -0.036s;\r\n            animation-delay: -0.036s;\r\n  }\r\n  .td-loading-roller div:nth-child(1):after {\r\n    top: 50px;\r\n    left: 50px;\r\n  }\r\n  .td-loading-roller div:nth-child(2) {\r\n    -webkit-animation-delay: -0.072s;\r\n            animation-delay: -0.072s;\r\n  }\r\n  .td-loading-roller div:nth-child(2):after {\r\n    top: 54px;\r\n    left: 45px;\r\n  }\r\n  .td-loading-roller div:nth-child(3) {\r\n    -webkit-animation-delay: -0.108s;\r\n            animation-delay: -0.108s;\r\n  }\r\n  .td-loading-roller div:nth-child(3):after {\r\n    top: 57px;\r\n    left: 39px;\r\n  }\r\n  .td-loading-roller div:nth-child(4) {\r\n    -webkit-animation-delay: -0.144s;\r\n            animation-delay: -0.144s;\r\n  }\r\n  .td-loading-roller div:nth-child(4):after {\r\n    top: 58px;\r\n    left: 32px;\r\n  }\r\n  .td-loading-roller div:nth-child(5) {\r\n    -webkit-animation-delay: -0.18s;\r\n            animation-delay: -0.18s;\r\n  }\r\n  .td-loading-roller div:nth-child(5):after {\r\n    top: 57px;\r\n    left: 25px;\r\n  }\r\n  .td-loading-roller div:nth-child(6) {\r\n    -webkit-animation-delay: -0.216s;\r\n            animation-delay: -0.216s;\r\n  }\r\n  .td-loading-roller div:nth-child(6):after {\r\n    top: 54px;\r\n    left: 19px;\r\n  }\r\n  .td-loading-roller div:nth-child(7) {\r\n    -webkit-animation-delay: -0.252s;\r\n            animation-delay: -0.252s;\r\n  }\r\n  .td-loading-roller div:nth-child(7):after {\r\n    top: 50px;\r\n    left: 14px;\r\n  }\r\n  .td-loading-roller div:nth-child(8) {\r\n    -webkit-animation-delay: -0.288s;\r\n            animation-delay: -0.288s;\r\n  }\r\n  .td-loading-roller div:nth-child(8):after {\r\n    top: 45px;\r\n    left: 10px;\r\n  }\r\n  @-webkit-keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  @keyframes lds-roller {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC10ZXh0LWRpZmYvc3JjL2xpYi9sb2FkZXItc3Bpbm5lci9sb2FkZXItc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSx3RUFBZ0U7WUFBaEUsZ0VBQWdFO0lBQ2hFLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtdGV4dC1kaWZmL3NyYy9saWIvbG9hZGVyLXNwaW5uZXIvbG9hZGVyLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZC1sb2FkaW5nLXJvbGxlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICB9XHJcbiAgLnRkLWxvYWRpbmctcm9sbGVyIGRpdiB7XHJcbiAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xyXG4gIH1cclxuICAudGQtbG9hZGluZy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgbWFyZ2luOiAtM3B4IDAgMCAtM3B4O1xyXG4gIH1cclxuICAudGQtbG9hZGluZy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XHJcbiAgfVxyXG4gIC50ZC1sb2FkaW5nLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgfVxyXG4gIC50ZC1sb2FkaW5nLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcclxuICB9XHJcbiAgLnRkLWxvYWRpbmctcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xyXG4gICAgdG9wOiA1NHB4O1xyXG4gICAgbGVmdDogNDVweDtcclxuICB9XHJcbiAgLnRkLWxvYWRpbmctcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xyXG4gIH1cclxuICAudGQtbG9hZGluZy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBsZWZ0OiAzOXB4O1xyXG4gIH1cclxuICAudGQtbG9hZGluZy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XHJcbiAgfVxyXG4gIC50ZC1sb2FkaW5nLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuICAgIHRvcDogNThweDtcclxuICAgIGxlZnQ6IDMycHg7XHJcbiAgfVxyXG4gIC50ZC1sb2FkaW5nLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xyXG4gIH1cclxuICAudGQtbG9hZGluZy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gIH1cclxuICAudGQtbG9hZGluZy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XHJcbiAgfVxyXG4gIC50ZC1sb2FkaW5nLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcclxuICAgIHRvcDogNTRweDtcclxuICAgIGxlZnQ6IDE5cHg7XHJcbiAgfVxyXG4gIC50ZC1sb2FkaW5nLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcclxuICB9XHJcbiAgLnRkLWxvYWRpbmctcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMTRweDtcclxuICB9XHJcbiAgLnRkLWxvYWRpbmctcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xyXG4gIH1cclxuICAudGQtbG9hZGluZy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XHJcbiAgICB0b3A6IDQ1cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.ts":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoaderSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderSpinnerComponent", function() { return LoaderSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderSpinnerComponent = class LoaderSpinnerComponent {
    constructor() {
        this.active = false;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoaderSpinnerComponent.prototype, "active", void 0);
LoaderSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'td-loader-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader-spinner.component.css */ "./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.css")).default]
    })
], LoaderSpinnerComponent);



/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/ngx-text-diff-container.directive.ts":
/*!*****************************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/ngx-text-diff-container.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: ContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerDirective", function() { return ContainerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContainerDirective = class ContainerDirective {
    constructor(_el) {
        this._el = _el;
        this.element = _el.nativeElement;
    }
};
ContainerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContainerDirective.prototype, "id", void 0);
ContainerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[tdContainer]',
    })
], ContainerDirective);



/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/ngx-text-diff.component.css":
/*!********************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/ngx-text-diff.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".td-wrapper {\r\n    display: grid;\r\n    width: 100%;\r\n    grid-row-gap: 10px;\r\n    grid-template-columns: repeat(2, [col] 50%);\r\n    grid-template-rows: repeat(2, [row] auto);\r\n    background-color: #fff;\r\n    color: #444;\r\n  }\r\n  \r\n  .td-toolbar-show-diff {\r\n    grid-column: 1;\r\n    grid-row: 1;\r\n  }\r\n  \r\n  .td-toolbar-select-format {\r\n    margin-left: auto;\r\n    grid-column: 2;\r\n    grid-row: 1;\r\n  }\r\n  \r\n  .td-table-container {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    overflow-x: auto;\r\n  }\r\n  \r\n  .td-table-wrapper {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    width: 200%;\r\n  }\r\n  \r\n  .td-table {\r\n    border: 1px solid darkgray;\r\n    max-height: 50vh;\r\n    width: 100%;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .fit-column {\r\n    width: 1px;\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .line-number-col {\r\n    position: relative; /* I am the fallback */\r\n  \r\n    /* Give it everything you got! (use an auto prefixer...) */\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    left: 0;\r\n    top: auto;\r\n    border-right: 1px solid #ddd;\r\n    color: #999;\r\n    text-align: right;\r\n    background-color: #f7f7f7;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    font-size: 87.5%;\r\n  }\r\n  \r\n  .line-number-col-left {\r\n    color: #999;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    text-align: right;\r\n    background-color: #f7f7f7;\r\n    font-size: 87.5%;\r\n  }\r\n  \r\n  .insert-row,\r\n  .insert-row > .line-number-col {\r\n    background-color: #dfd;\r\n    border-color: #b4e2b4;\r\n  }\r\n  \r\n  .delete-row,\r\n  .delete-row > .line-number-col {\r\n    background-color: #fee8e9;\r\n    border-color: #e9aeae;\r\n  }\r\n  \r\n  .empty-row {\r\n    background-color: #f7f7f7;\r\n    height: 24px;\r\n  }\r\n  \r\n  .td-table td {\r\n    border-top: 0;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n    white-space: nowrap;\r\n    max-width: 50%;\r\n  }\r\n  \r\n  pre {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  td.content-col {\r\n    padding: 0;\r\n    margin: 0;\r\n    line-height: 24px;\r\n  }\r\n  \r\n  td.prefix-col {\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    line-height: 24px;\r\n  }\r\n  \r\n  .td-btn-group {\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .td-btn-group button {\r\n    background-color: rgba(23,162,184,.7); /* Green background */\r\n    border: 1px solid #17a2b8; /* Green border */\r\n    color: white; /* White text */\r\n    cursor: pointer; /* Pointer/hand icon */\r\n    float: left; /* Float the buttons side by side */\r\n  }\r\n  \r\n  .td-btn-group button:not(:last-child) {\r\n    border-right: none; /* Prevent double borders */\r\n  }\r\n  \r\n  .td-btn-group button:first-child {\r\n    -webkit-border-top-left-radius: 4px;\r\n    -webkit-border-bottom-left-radius: 4px;\r\n    -moz-border-radius-topleft: 4px;\r\n    -moz-border-radius-bottomleft: 4px;\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n  }\r\n  \r\n  .td-btn-group button:last-child {\r\n    -webkit-border-top-right-radius: 4px;\r\n    -webkit-border-bottom-right-radius: 4px;\r\n    -moz-border-radius-topright: 4px;\r\n    -moz-border-radius-bottomright: 4px;\r\n    border-top-right-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n  }\r\n  \r\n  /* Clear floats (clearfix hack) */\r\n  \r\n  .td-btn-group:after {\r\n    content: '';\r\n    clear: both;\r\n    display: table;\r\n  }\r\n  \r\n  /* Add a background color on hover */\r\n  \r\n  .td-btn-group button:hover,\r\n  .td-btn-group button.active {\r\n    background-color: #17a2b8;\r\n  }\r\n  \r\n  /* Customize the label (the container) */\r\n  \r\n  .td-checkbox-container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 21px;\r\n    margin-bottom: 0;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n    line-height: 28px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  /* Hide the browser's default checkbox */\r\n  \r\n  .td-checkbox-container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n  }\r\n  \r\n  /* Create a custom checkbox */\r\n  \r\n  .checkmark {\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 0;\r\n    height: 16px;\r\n    width: 16px;\r\n    background-color: #eee;\r\n  }\r\n  \r\n  /* On mouse-over, add a grey background color */\r\n  \r\n  .td-checkbox-container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n  }\r\n  \r\n  /* When the checkbox is checked, add a blue background */\r\n  \r\n  .td-checkbox-container input:checked ~ .checkmark {\r\n    background-color: #17a2b8;\r\n  }\r\n  \r\n  /* Create the checkmark/indicator (hidden when not checked) */\r\n  \r\n  .checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n  \r\n  /* Show the checkmark when checked */\r\n  \r\n  .td-checkbox-container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n  \r\n  /* Style the checkmark/indicator */\r\n  \r\n  .td-checkbox-container .checkmark:after {\r\n    left: 5px;\r\n    top: 3px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }\r\n  \r\n  .insert-row > .highlight {\r\n    background-color: #acf2bd !important;\r\n  }\r\n  \r\n  .delete-row > .highlight {\r\n    background-color: #fdb8c0 !important;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC10ZXh0LWRpZmYvc3JjL2xpYi9uZ3gtdGV4dC1kaWZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0IsRUFBRSxzQkFBc0I7O0lBRTFDLDBEQUEwRDtJQUMxRCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsc0JBQXNCO0lBQ3RCLHFCQUFxQjtFQUN2Qjs7RUFFQTs7SUFFRSx5QkFBeUI7SUFDekIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFDQUFxQyxFQUFFLHFCQUFxQjtJQUM1RCx5QkFBeUIsRUFBRSxpQkFBaUI7SUFDNUMsWUFBWSxFQUFFLGVBQWU7SUFDN0IsZUFBZSxFQUFFLHNCQUFzQjtJQUN2QyxXQUFXLEVBQUUsbUNBQW1DO0VBQ2xEOztFQUVBO0lBQ0Usa0JBQWtCLEVBQUUsMkJBQTJCO0VBQ2pEOztFQUNBO0lBQ0UsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFFQSxpQ0FBaUM7O0VBQ2pDO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBLG9DQUFvQzs7RUFDcEM7O0lBRUUseUJBQXlCO0VBQzNCOztFQUVBLHdDQUF3Qzs7RUFDeEM7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztFQUVBLHdDQUF3Qzs7RUFDeEM7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtFQUNWOztFQUVBLDZCQUE2Qjs7RUFDN0I7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQSwrQ0FBK0M7O0VBQy9DO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBLHdEQUF3RDs7RUFDeEQ7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUEsNkRBQTZEOztFQUM3RDtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBLG9DQUFvQzs7RUFDcEM7SUFDRSxjQUFjO0VBQ2hCOztFQUVBLGtDQUFrQzs7RUFDbEM7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFFaEMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InByb2plY3RzL25neC10ZXh0LWRpZmYvc3JjL2xpYi9uZ3gtdGV4dC1kaWZmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBbY29sXSA1MCUpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgW3Jvd10gYXV0byk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZC10b29sYmFyLXNob3ctZGlmZiB7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gIH1cclxuICBcclxuICAudGQtdG9vbGJhci1zZWxlY3QtZm9ybWF0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICB9XHJcbiAgXHJcbiAgLnRkLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnRkLXRhYmxlLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gIH1cclxuICBcclxuICAudGQtdGFibGUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maXQtY29sdW1uIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBcclxuICAubGluZS1udW1iZXItY29sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogSSBhbSB0aGUgZmFsbGJhY2sgKi9cclxuICBcclxuICAgIC8qIEdpdmUgaXQgZXZlcnl0aGluZyB5b3UgZ290ISAodXNlIGFuIGF1dG8gcHJlZml4ZXIuLi4pICovXHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDg3LjUlO1xyXG4gIH1cclxuICBcclxuICAubGluZS1udW1iZXItY29sLWxlZnQge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgZm9udC1zaXplOiA4Ny41JTtcclxuICB9XHJcbiAgXHJcbiAgLmluc2VydC1yb3csXHJcbiAgLmluc2VydC1yb3cgPiAubGluZS1udW1iZXItY29sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNiNGUyYjQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxldGUtcm93LFxyXG4gIC5kZWxldGUtcm93ID4gLmxpbmUtbnVtYmVyLWNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlOGU5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTlhZWFlO1xyXG4gIH1cclxuICBcclxuICAuZW1wdHktcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZC10YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgcHJlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLmNvbnRlbnQtY29sIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgdGQucHJlZml4LWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZC1idG4tZ3JvdXAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAudGQtYnRuLWdyb3VwIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLDE2MiwxODQsLjcpOyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTdhMmI4OyAvKiBHcmVlbiBib3JkZXIgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBQb2ludGVyL2hhbmQgaWNvbiAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7IC8qIEZsb2F0IHRoZSBidXR0b25zIHNpZGUgYnkgc2lkZSAqL1xyXG4gIH1cclxuICBcclxuICAudGQtYnRuLWdyb3VwIGJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTsgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xyXG4gIH1cclxuICAudGQtYnRuLWdyb3VwIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6IDRweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZC1idG4tZ3JvdXAgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OiA0cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tcmlnaHQ6IDRweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgKGNsZWFyZml4IGhhY2spICovXHJcbiAgLnRkLWJ0bi1ncm91cDphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuICAudGQtYnRuLWdyb3VwIGJ1dHRvbjpob3ZlcixcclxuICAudGQtYnRuLWdyb3VwIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNvbnRhaW5lcikgKi9cclxuICAudGQtY2hlY2tib3gtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuICAudGQtY2hlY2tib3gtY29udGFpbmVyIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbiAgLmNoZWNrbWFyayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gIC50ZC1jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4gIC50ZC1jaGVja2JveC1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbiAgLnRkLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuICAudGQtY2hlY2tib3gtY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnNlcnQtcm93ID4gLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNmMmJkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWxldGUtcm93ID4gLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiOGMwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/ngx-text-diff.component.ts":
/*!*******************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/ngx-text-diff.component.ts ***!
  \*******************************************************************/
/*! exports provided: NgxTextDiffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTextDiffComponent", function() { return NgxTextDiffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_text_diff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-text-diff.service */ "./projects/ngx-text-diff/src/lib/ngx-text-diff.service.ts");
/* harmony import */ var _ngx_text_diff_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-text-diff-container.directive */ "./projects/ngx-text-diff/src/lib/ngx-text-diff-container.directive.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");





let NgxTextDiffComponent = class NgxTextDiffComponent {
    constructor(scrollService, diff, cd) {
        this.scrollService = scrollService;
        this.diff = diff;
        this.cd = cd;
        this._hideMatchingLines = false;
        this.format = 'SideBySide';
        this.left = '';
        this.right = '';
        this.loading = false;
        this.showToolbar = true;
        this.showBtnToolbar = true;
        this.synchronizeScrolling = true;
        this.compareResults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.subscriptions = [];
        this.tableRows = [];
        this.filteredTableRows = [];
        this.tableRowsLineByLine = [];
        this.filteredTableRowsLineByLine = [];
        this.diffsCount = 0;
        this.formatOptions = [
            {
                id: 'side-by-side',
                name: 'side-by-side',
                label: 'Side by Side',
                value: 'SideBySide',
                icon: 'la-code',
            },
            {
                id: 'line-by-line',
                name: 'line-by-line',
                label: 'Line by Line',
                value: 'LineByLine',
                icon: 'la-file-text',
            },
        ];
    }
    get hideMatchingLines() {
        return this._hideMatchingLines;
    }
    set hideMatchingLines(hide) {
        this.hideMatchingLinesChanged(hide);
    }
    ngOnInit() {
        this.loading = true;
        if (this.diffContent) {
            this.subscriptions.push(this.diffContent.subscribe(content => {
                this.loading = true;
                this.left = content.leftContent;
                this.right = content.rightContent;
                this.renderDiffs()
                    .then(() => {
                    this.cd.detectChanges();
                    this.loading = false;
                })
                    .catch(() => (this.loading = false));
            }));
        }
        this.renderDiffs()
            .then(() => (this.loading = false))
            .catch(e => (this.loading = false));
    }
    ngAfterViewInit() {
        this.initScrollListener();
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.forEach(subscription => subscription.unsubscribe());
        }
    }
    hideMatchingLinesChanged(value) {
        this._hideMatchingLines = value;
        if (this.hideMatchingLines) {
            this.filteredTableRows = this.tableRows.filter(row => (row.leftContent && row.leftContent.prefix === '-') || (row.rightContent && row.rightContent.prefix === '+'));
            this.filteredTableRowsLineByLine = this.tableRowsLineByLine.filter(row => (row.leftContent && row.leftContent.prefix === '-') || (row.rightContent && row.rightContent.prefix === '+'));
        }
        else {
            this.filteredTableRows = this.tableRows;
            this.filteredTableRowsLineByLine = this.tableRowsLineByLine;
        }
    }
    setDiffTableFormat(format) {
        this.format = format;
    }
    renderDiffs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.diffsCount = 0;
                this.tableRows = yield this.diff.getDiffsByLines(this.left, this.right);
                this.tableRowsLineByLine = this.tableRows.reduce((tableLineByLine, row) => {
                    if (!tableLineByLine) {
                        tableLineByLine = [];
                    }
                    if (row.hasDiffs) {
                        if (row.leftContent) {
                            tableLineByLine.push({
                                leftContent: row.leftContent,
                                rightContent: null,
                                belongTo: row.belongTo,
                                hasDiffs: true,
                                numDiffs: row.numDiffs,
                            });
                        }
                        if (row.rightContent) {
                            tableLineByLine.push({
                                leftContent: null,
                                rightContent: row.rightContent,
                                belongTo: row.belongTo,
                                hasDiffs: true,
                                numDiffs: row.numDiffs,
                            });
                        }
                    }
                    else {
                        tableLineByLine.push(row);
                    }
                    return tableLineByLine;
                }, []);
                this.diffsCount = this.tableRows.filter(row => row.hasDiffs).length;
                this.filteredTableRows = this.tableRows;
                this.filteredTableRowsLineByLine = this.tableRowsLineByLine;
                this.emitCompareResultsEvent();
            }
            catch (e) {
                throw e;
            }
        });
    }
    emitCompareResultsEvent() {
        const diffResults = {
            hasDiff: this.diffsCount > 0,
            diffsCount: this.diffsCount,
            rowsWithDiff: this.tableRows
                .filter(row => row.hasDiffs)
                .map(row => ({
                leftLineNumber: row.leftContent ? row.leftContent.lineNumber : null,
                rightLineNumber: row.rightContent ? row.rightContent.lineNumber : null,
                numDiffs: row.numDiffs,
            })),
        };
        this.compareResults.next(diffResults);
    }
    trackTableRows(index, row) {
        return row && row.leftContent ? row.leftContent.lineContent : row && row.rightContent ? row.rightContent.lineContent : undefined;
    }
    trackDiffs(index, diff) {
        return diff && diff.content ? diff.content : undefined;
    }
    initScrollListener() {
        this.subscriptions.push(this.scrollService.scrolled().subscribe((scrollableEv) => {
            if (scrollableEv && this.synchronizeScrolling) {
                const scrollableId = scrollableEv.getElementRef().nativeElement.id;
                const nonScrolledContainer = this.containers.find(container => container.id !== scrollableId);
                if (nonScrolledContainer) {
                    nonScrolledContainer.element.scrollTo({
                        top: scrollableEv.measureScrollOffset('top'),
                        left: scrollableEv.measureScrollOffset('left'),
                    });
                }
            }
        }));
    }
};
NgxTextDiffComponent.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollDispatcher"] },
    { type: _ngx_text_diff_service__WEBPACK_IMPORTED_MODULE_2__["NgxTextDiffService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_ngx_text_diff_container_directive__WEBPACK_IMPORTED_MODULE_3__["ContainerDirective"])
], NgxTextDiffComponent.prototype, "containers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "format", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "left", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "right", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "diffContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "showToolbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "showBtnToolbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "hideMatchingLines", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "outerContainerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "outerContainerStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "toolbarClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "toolbarStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "compareRowsClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "compareRowsStyle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgxTextDiffComponent.prototype, "synchronizeScrolling", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxTextDiffComponent.prototype, "compareResults", void 0);
NgxTextDiffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'td-ngx-text-diff',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-text-diff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ngx-text-diff/src/lib/ngx-text-diff.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-text-diff.component.css */ "./projects/ngx-text-diff/src/lib/ngx-text-diff.component.css")).default]
    })
], NgxTextDiffComponent);



/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/ngx-text-diff.module.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/ngx-text-diff.module.ts ***!
  \****************************************************************/
/*! exports provided: NgxTextDiffModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTextDiffModule", function() { return NgxTextDiffModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_text_diff_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-text-diff.component */ "./projects/ngx-text-diff/src/lib/ngx-text-diff.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _loader_spinner_loader_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader-spinner/loader-spinner.component */ "./projects/ngx-text-diff/src/lib/loader-spinner/loader-spinner.component.ts");
/* harmony import */ var _format_line_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format-line.pipe */ "./projects/ngx-text-diff/src/lib/format-line.pipe.ts");
/* harmony import */ var _ngx_text_diff_container_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngx-text-diff-container.directive */ "./projects/ngx-text-diff/src/lib/ngx-text-diff-container.directive.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");









let NgxTextDiffModule = class NgxTextDiffModule {
};
NgxTextDiffModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatchModule"]],
        declarations: [_ngx_text_diff_component__WEBPACK_IMPORTED_MODULE_2__["NgxTextDiffComponent"], _loader_spinner_loader_spinner_component__WEBPACK_IMPORTED_MODULE_5__["LoaderSpinnerComponent"], _format_line_pipe__WEBPACK_IMPORTED_MODULE_6__["FormatLinePipe"], _ngx_text_diff_container_directive__WEBPACK_IMPORTED_MODULE_7__["ContainerDirective"]],
        exports: [_ngx_text_diff_component__WEBPACK_IMPORTED_MODULE_2__["NgxTextDiffComponent"]]
    })
], NgxTextDiffModule);



/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/ngx-text-diff.service.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/ngx-text-diff.service.ts ***!
  \*****************************************************************/
/*! exports provided: NgxTextDiffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTextDiffService", function() { return NgxTextDiffService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! diff-match-patch */ "./node_modules/diff-match-patch/index.js");
/* harmony import */ var diff_match_patch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(diff_match_patch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_text_diff_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-text-diff.utils */ "./projects/ngx-text-diff/src/lib/ngx-text-diff.utils.ts");




let NgxTextDiffService = class NgxTextDiffService {
    constructor() {
        this.initParser();
    }
    initParser() {
        this.diffParser = new diff_match_patch__WEBPACK_IMPORTED_MODULE_2__["diff_match_patch"]();
    }
    getDiffsByLines(left, right) {
        return new Promise((resolve, reject) => {
            const a = this.diffParser.diff_linesToChars_(left, right);
            const lineText1 = a.chars1;
            const lineText2 = a.chars2;
            const linesArray = a.lineArray;
            const diffs = this.diffParser.diff_main(lineText1, lineText2, true);
            this.diffParser.diff_charsToLines_(diffs, linesArray);
            const rows = this.formatOutput(diffs);
            if (!rows) {
                reject('Error');
            }
            resolve(rows);
        });
    }
    formatOutput(diffs) {
        let lineLeft = 1;
        let lineRight = 1;
        return diffs.reduce((rows, diff) => {
            if (!rows) {
                rows = [];
            }
            const diffType = diff[0];
            const diffValue = diff[1];
            let leftDiffRow = null;
            let rightDiffRow = null;
            let leftContent = null;
            let rightContent = null;
            let rowTemp = null;
            switch (diffType) {
                case diff_match_patch__WEBPACK_IMPORTED_MODULE_2__["DIFF_EQUAL"]: // 0
                    diffValue
                        .split('\n')
                        .filter((value, index, array) => {
                        if (index === array.length - 1) {
                            return !Object(_ngx_text_diff_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(value);
                        }
                        return true;
                    })
                        .forEach(line => {
                        leftContent = {
                            lineNumber: lineLeft,
                            lineContent: line,
                            lineDiffs: [],
                            prefix: ''
                        };
                        rightContent = {
                            lineNumber: lineRight,
                            lineContent: line,
                            lineDiffs: [],
                            prefix: ''
                        };
                        rowTemp = {
                            leftContent,
                            rightContent,
                            belongTo: 'both',
                            hasDiffs: false,
                            numDiffs: 0,
                        };
                        rows.push(rowTemp);
                        lineRight = lineRight + 1;
                        lineLeft = lineLeft + 1;
                    });
                    break;
                case diff_match_patch__WEBPACK_IMPORTED_MODULE_2__["DIFF_DELETE"]: // -1
                    diffValue
                        .split('\n')
                        .filter((value, index, array) => {
                        if (index === array.length - 1) {
                            return !Object(_ngx_text_diff_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(value);
                        }
                        return true;
                    })
                        .forEach(line => {
                        rightDiffRow = rows.find(row => !row.leftContent && row.rightContent && row.rightContent.lineNumber === lineLeft && row.rightContent.prefix !== '');
                        leftContent = {
                            lineNumber: lineLeft,
                            lineContent: line,
                            lineDiffs: [{ content: line, isDiff: true }],
                            prefix: '-'
                        };
                        if (rightDiffRow) {
                            rightDiffRow.leftContent = leftContent;
                            rightDiffRow.leftContent.lineDiffs = this.getDiffParts(rightDiffRow.leftContent.lineContent, rightDiffRow.rightContent.lineContent);
                            rightDiffRow.rightContent.lineDiffs = this.getDiffParts(rightDiffRow.rightContent.lineContent, rightDiffRow.leftContent.lineContent);
                            rightDiffRow.belongTo = 'both';
                            rightDiffRow.numDiffs = this.countDiffs(rightDiffRow);
                        }
                        else {
                            rows.push({
                                leftContent,
                                rightContent: null,
                                hasDiffs: true,
                                belongTo: 'left',
                                numDiffs: 1,
                            });
                        }
                        lineLeft = lineLeft + 1;
                    });
                    break;
                case diff_match_patch__WEBPACK_IMPORTED_MODULE_2__["DIFF_INSERT"]: // 1
                    diffValue
                        .split('\n')
                        .filter((value, index, array) => {
                        if (index === array.length - 1) {
                            return !Object(_ngx_text_diff_utils__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(value);
                        }
                        return true;
                    })
                        .forEach(line => {
                        leftDiffRow = rows.find(row => row.leftContent && !row.rightContent && row.leftContent.lineNumber === lineRight && row.leftContent.prefix !== '');
                        rightContent = {
                            lineNumber: lineRight,
                            lineContent: line,
                            lineDiffs: [{ content: line, isDiff: true }],
                            prefix: '+'
                        };
                        if (leftDiffRow) {
                            leftDiffRow.rightContent = rightContent;
                            leftDiffRow.leftContent.lineDiffs = this.getDiffParts(leftDiffRow.leftContent.lineContent, leftDiffRow.rightContent.lineContent);
                            leftDiffRow.rightContent.lineDiffs = this.getDiffParts(leftDiffRow.rightContent.lineContent, leftDiffRow.leftContent.lineContent);
                            leftDiffRow.belongTo = 'both';
                            leftDiffRow.numDiffs = this.countDiffs(leftDiffRow);
                        }
                        else {
                            rows.push({
                                leftContent: null,
                                rightContent,
                                hasDiffs: true,
                                belongTo: 'right',
                                numDiffs: 1,
                            });
                        }
                        lineRight = lineRight + 1;
                    });
                    break;
            }
            return rows;
        }, []);
    }
    countDiffs(result) {
        let diffCount = 0;
        if (result.leftContent) {
            diffCount += result.leftContent.lineDiffs.filter(diff => diff.isDiff).length;
        }
        if (result.leftContent) {
            diffCount += result.rightContent.lineDiffs.filter(diff => diff.isDiff).length;
        }
        return diffCount;
    }
    getDiffParts(value, compareValue) {
        const diffParts = [];
        let i = 0;
        let j = 0;
        let shared = '';
        let diff = '';
        while (i < value.length) {
            if (value[i] === compareValue[j] && j < compareValue.length) {
                if (diff !== '') {
                    diffParts.push({ content: diff, isDiff: true });
                    diff = '';
                }
                shared += value[i];
            }
            else {
                if (shared !== '') {
                    diffParts.push({ content: shared, isDiff: false });
                    shared = '';
                }
                diff += value[i];
            }
            i++;
            j++;
        }
        if (diff !== '') {
            diffParts.push({ content: diff, isDiff: true });
        }
        else if (shared !== '') {
            diffParts.push({ content: shared, isDiff: false });
        }
        return diffParts;
    }
};
NgxTextDiffService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NgxTextDiffService);



/***/ }),

/***/ "./projects/ngx-text-diff/src/lib/ngx-text-diff.utils.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-text-diff/src/lib/ngx-text-diff.utils.ts ***!
  \***************************************************************/
/*! exports provided: isNil, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNil", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const isNil = val => val === undefined || val === null;
const isEmpty = val => val == null || !(Object.keys(val) || val).length || (Object.keys(val) || val).length === 0;


/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer.main-footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: #2f333e;\n  color: #fff;\n  padding: 4px; }\n\nfooter.main-footer p {\n  font-size: 16px;\n  font-weight: 500;\n  color: #ffffff;\n  margin-bottom: 0px !important; }\n\nfooter.main-footer a {\n  color: #fff; }\n\n.company_name {\n  font-size: 25px;\n  font-weight: 800; }\n\nheader.header {\n  background: #fff;\n  color: #666;\n  position: relative;\n  border-radius: 0;\n  z-index: 10;\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 30px; }\n\nheader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 15px; }\n\n.navbar-header .brand-logo img {\n  width: 177px; }\n\n:ng-deep .td-table-wrapper {\n  max-height: calc(100vh - 335px) !important; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #f49322;\n  border-color: #f98907; }\n\n.custom-file-label::after {\n  color: #ffffff;\n  background-color: #605f60; }\n\n.compare_table {\n  padding-bottom: 25px; }\n\n.label label {\n  padding: 0px 7px 0px 0px;\n  font-weight: 500; }\n\n/* .page-title.reason {\r\n    border: 2px solid #000;\r\n    padding: 10px 20px;\r\n    margin-bottom: 4rem;\r\n} */\n\n.page-title.reason ::ng-deep .mat-form-field-appearance-legacy .mat-form-field-underline {\n  height: 0px; }\n\n.page-title.reason ::ng-deep .mat-form-field-infix {\n  border: 1px solid #ddd;\n  width: 510px; }\n\n.submit-btn {\n  margin-left: 10px; }\n\n.back.mat-icon.notranslate.material-icons.mat-icon-no-color {\n  vertical-align: middle; }\n\n.page-title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 20px 0px; }\n\n.page-title h2 {\n    font-size: 18px;\n    margin: 0;\n    font-weight: 500; }\n\n.page-title.reason h4 {\n    margin-right: 10px;\n    font-size: 21px; }\n\n.page-title.reason form {\n    display: -webkit-box;\n    display: flex; }\n\n.clock_all {\n  font-size: 14px; }\n\n.clock_all .clock_top {\n    margin: 5px auto; }\n\n.file-path {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 15px 0px; }\n\n.file-path p {\n    margin: 0;\n    font-size: 14px; }\n\n.file-path p span {\n      padding: 0px 4px 0px 0px;\n      font-weight: 500; }\n\n.file-path label {\n    font-weight: 500; }\n\n.home-back {\n  padding: 10px 0px; }\n\n.home-back a {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    text-decoration: none;\n    color: #000000;\n    font-size: 14px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsdGl1cy9Qcml5YS95YW50cmFfdmF1bHRfZnJvbnRlbmQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDZCQUE0QixFQUFBOztBQUVoQztFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFHaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksMENBQXlDLEVBQUE7O0FBRTdDO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBOztBQUVwQjs7OztHQ0FHOztBRE1IO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksc0JBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGlCQUFpQixFQUFBOztBQUhyQjtJQUtRLGVBQWU7SUFDZixTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7O0FBUHhCO0lBV1ksa0JBQWtCO0lBQ2xCLGVBQ0osRUFBQTs7QUFiUjtJQWVZLG9CQUFhO0lBQWIsYUFBYSxFQUFBOztBQUt6QjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFOcEI7SUFRUSxTQUFRO0lBQ1IsZUFBZSxFQUFBOztBQVR2QjtNQVdZLHdCQUF3QjtNQUN4QixnQkFBZSxFQUFBOztBQVozQjtJQWdCUSxnQkFBZ0IsRUFBQTs7QUFHeEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZvb3Rlci5tYWluLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMyZjMzM2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5mb290ZXIubWFpbi1mb290ZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHghaW1wb3J0YW50O1xyXG59XHJcbmZvb3Rlci5tYWluLWZvb3RlciBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5jb21wYW55X25hbWV7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbmhlYWRlci5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAvLyBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItaGVhZGVyIC5icmFuZC1sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogMTc3cHg7XHJcbn1cclxuOm5nLWRlZXAgIC50ZC10YWJsZS13cmFwcGVyIHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMzVweCkhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDkzMjI7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOTg5MDc7XHJcbn1cclxuLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDVmNjA7XHJcbn1cclxuLmNvbXBhcmVfdGFibGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuLmxhYmVsIGxhYmVse1xyXG4gICAgcGFkZGluZzogMHB4IDdweCAwcHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4vKiAucGFnZS10aXRsZS5yZWFzb24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbn0gKi9cclxuXHJcbi5wYWdlLXRpdGxlLnJlYXNvbiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmV7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUucmVhc29uIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbiAgICB3aWR0aDogNTEwcHg7XHJcbn1cclxuLnN1Ym1pdC1idG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmJhY2subWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAmLnJlYXNvbntcclxuICAgICAgICBoNHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9ja19hbGwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4uY2xvY2tfdG9wIHtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbn1cclxufVxyXG4uZmlsZS1wYXRoIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgICAgICB9XHJcbi5ob21lLWJhY2sge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJmb290ZXIubWFpbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMyZjMzM2U7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0cHg7IH1cblxuZm9vdGVyLm1haW4tZm9vdGVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDsgfVxuXG5mb290ZXIubWFpbi1mb290ZXIgYSB7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5jb21wYW55X25hbWUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7IH1cblxuaGVhZGVyLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNjY2O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cblxuLm5hdmJhci1oZWFkZXIgLmJyYW5kLWxvZ28gaW1nIHtcbiAgd2lkdGg6IDE3N3B4OyB9XG5cbjpuZy1kZWVwIC50ZC10YWJsZS13cmFwcGVyIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMzNXB4KSAhaW1wb3J0YW50OyB9XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ5MzIyO1xuICBib3JkZXItY29sb3I6ICNmOTg5MDc7IH1cblxuLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA1ZjYwOyB9XG5cbi5jb21wYXJlX3RhYmxlIHtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7IH1cblxuLmxhYmVsIGxhYmVsIHtcbiAgcGFkZGluZzogMHB4IDdweCAwcHggMHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi8qIC5wYWdlLXRpdGxlLnJlYXNvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufSAqL1xuLnBhZ2UtdGl0bGUucmVhc29uIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGhlaWdodDogMHB4OyB9XG5cbi5wYWdlLXRpdGxlLnJlYXNvbiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgd2lkdGg6IDUxMHB4OyB9XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cblxuLmJhY2subWF0LWljb24ubm90cmFuc2xhdGUubWF0ZXJpYWwtaWNvbnMubWF0LWljb24tbm8tY29sb3Ige1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG5cbi5wYWdlLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4IDBweDsgfVxuICAucGFnZS10aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG4gIC5wYWdlLXRpdGxlLnJlYXNvbiBoNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjFweDsgfVxuICAucGFnZS10aXRsZS5yZWFzb24gZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuXG4uY2xvY2tfYWxsIHtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG4gIC5jbG9ja19hbGwgLmNsb2NrX3RvcCB7XG4gICAgbWFyZ2luOiA1cHggYXV0bzsgfVxuXG4uZmlsZS1wYXRoIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDBweDsgfVxuICAuZmlsZS1wYXRoIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgICAuZmlsZS1wYXRoIHAgc3BhbiB7XG4gICAgICBwYWRkaW5nOiAwcHggNHB4IDBweCAwcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwOyB9XG4gIC5maWxlLXBhdGggbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLmhvbWUtYmFjayB7XG4gIHBhZGRpbmc6IDEwcHggMHB4OyB9XG4gIC5ob21lLWJhY2sgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7IH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Nav/navbar.service */ "./src/app/Nav/navbar.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");

// import { Component, OnInit } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { DiffResults } from '../../../projects/ngx-text-diff/src/lib/ngx-text-diff.model';
// export interface DiffContent {
//   leftContent: string;
//   rightContent: string;
// }
// @Component({
//   selector: 'tda-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   submitted = false;
//   content: DiffContent = {
//     leftContent: '',
//     rightContent: ''
//   };
//   options: any = {
//     lineNumbers: true,
//     mode: 'xml'
//   };
//   contentObservable: Subject<DiffContent> = new Subject<DiffContent>();
//   contentObservable$: Observable<DiffContent> = this.contentObservable.asObservable();
//   constructor() {}
//   ngOnInit() {
//     this.submitted = false;
//     this.content.leftContent =
//       '<card xmlns="http://businesscard.org">\n' +
//       '   <name>John Doe</name>\n' +
//       '   <title>CEO, Widget Inc.</title>\n' +
//       '   <email>john.Moe@widget.com</email>\n' +
//       '   <cellphone>(202) 456-1414</cellphone>\n' +
//       '   <phone>(202) 456-1414</phone>\n' +
//       '   <logo url="widget.gif"/>\n' +
//       ' </card>';
//     this.content.rightContent =
//       '<card xmlns="http://businesscard.org">\n' +
//       '   <name>John Moe</name>\n' +
//       '   <title>CEO, Widget Inc.</title>\n' +
//       '   <email>john.Moe@widget.com</email>\n' +
//       '   <phone>(202) 456-1414</phone>\n' +
//       '   <address>Test</address>\n' +
//       '   <logo url="widget.gif"/>\n' +
//       ' </card>';
//   }
//   submitComparison() {
//     this.submitted = false;
//     this.contentObservable.next(this.content);
//     this.submitted = true;
//   }
//   handleChange(side: 'left' | 'right', value: string) {
//     switch (side) {
//       case 'left':
//         this.content.leftContent = value;
//         break;
//       case 'right':
//         this.content.rightContent = value;
//         break;
//       default:
//         break;
//     }
//   }
//   onCompareResults(diffResults: DiffResults) {
//     console.log('diffResults', diffResults);
//   }
// }


// import { FormBuilder, FormGroup, Validators } from '@angular/forms';





let HomeComponent = class HomeComponent {
    constructor(nav, route, fb, http, dialog) {
        this.nav = nav;
        this.route = route;
        this.fb = fb;
        this.http = http;
        this.dialog = dialog;
        this.submitted = false;
        this.filName = "";
        this.filName1 = "";
        this.content = {
            leftContent: '',
            rightContent: ''
        };
        this.options = {
            lineNumbers: true,
            mode: 'xml'
        };
        this.contentObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.contentObservable$ = this.contentObservable.asObservable();
        this.show = false;
        this.buttonName = 'Compare';
        this.maxDate = new Date();
        this.date = new Date().toString();
        this.today = Date.now();
        this.nav.show();
        setInterval(() => { this.today = Date.now(); }, 1);
        this.login = this.fb.group({
            // name:["",Validators.required],
            reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    // this.httpClient.post('http://192.168.1.160:3000/users/create',{user: this.user.value}).subscribe(result =>{
    ngOnInit() {
        console.log(localStorage.getItem("tenant_id"));
        console.log(localStorage.getItem("user_id"));
        this.sample_test = localStorage.getItem("tenant_id");
        console.log(this.sample_test);
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("token")
            })
        };
        //headers.set("Authorization", "Bearer " +localStorage.getItem("token"));
        this.http.get("http://192.168.0.237:4000/api/v1/machines?tenant_id=" + this.sample_test, headers).subscribe(res => {
            console.log(res);
            // console.log(filName);
            this.machinesArray = res;
            this.onSelect(this.machinesArray[0].id);
            localStorage.getItem("tenant_id");
            console.log(localStorage.getItem('tenant_id'), localStorage.getItem("user_id"));
            console.log(localStorage.getItem("token"));
            // this.http.get("http://192.168.0.237:4000/api/v1/machines?tenant_id=' + $scope.tenant_id",).subscribe(res=>{
            //   console.log(res);
        });
    }
    // openDialog(): void {
    //   const dialogRef = this.dialog.open(Dialog, {
    //     width: '500px',
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    // })}
    onSelect(machine_id) {
        this.machineid = machine_id;
        console.log(this.machineid);
        this.filName = "";
        this.filName1 = "";
        this.submitted = false;
        this.compareResults = "";
        this.login.reset();
        this.Compare = false;
        this.file_path = "";
        this.file_name = "";
        this.fileName1 = "";
        this.filetext1 = "";
        // this.me.FileText = "";
        // CHANGE THE NAME OF THE BUTTON.
        console.log(this.Compare);
        if (this.Compare)
            this.buttonName = "Compare";
        // this.ngOnInit();
        // this.Compare = false;
        console.log(this.Compare);
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem("token")
            })
        };
        // http://52.66.140.40
        // console.log(machine_id)
        // this.http.get("http:///52.66.140.40/api/v1/file_path?id=" + machine_id, headers).subscribe(res => {
        console.log(machine_id);
        this.http.get("http://192.168.0.237:4000/api/v1/file_path?id=" + machine_id, headers).subscribe(res => {
            //console.log(res);
            // alert(res.status);
            // alert(res.file_path);
            // alert(res['status'])
            if (res['status'] != null) {
                alert(res['status']);
            }
            this.file_path = res;
        }, error => {
            console.log(error);
            this.file_path = error.error;
        });
    }
    submitComparison() {
        this.submitted = false;
        this.contentObservable.next(this.content);
        this.submitted = true;
    }
    handleChange(side, value) {
        switch (side) {
            case 'left':
                this.content.leftContent = value;
                break;
            case 'right':
                this.content.rightContent = value;
                break;
            default:
                break;
        }
    }
    onCompareResults(diffResults) {
        console.log('diffResults', diffResults);
        // console.log(this.file.name)
    }
    fileUpload(event) {
        var reader = new FileReader();
        let file = event.target.files[0];
        let file_name = file.name;
        this.filName = file_name;
        console.log(this.filName);
        reader.readAsText(event.srcElement.files[0]);
        var me = this;
        reader.onload = function () {
            me.FileText = reader.result;
            console.log(me);
            // me.content.leftContent = (reader.result).toString()
            me.handleChange('left', me.FileText);
        };
        //this.handleChange('left',me.FileText)
        this.Text = me.FileText;
    }
    fileUpload1(event) {
        var reader = new FileReader();
        console.log(event);
        this.file2 = event.target.files[0];
        console.log(this.file2);
        let fileName = this.file2.name;
        this.filName1 = fileName;
        reader.readAsText(event.srcElement.files[0]);
        var me = this;
        reader.onload = function () {
            me.filetext1 = reader.result;
            console.log(me);
            //me.content.rightContent = (reader.result).toString()
            me.handleChange('right', me.filetext1);
        };
        //this.handleChange('right',right)
        this.Text1 = me.filetext1;
    }
    logintest(val) {
        console.log(this.date);
        console.log(this.login.value);
        this.Compare = false;
        console.log(this.Compare);
        console.log(this.file2);
        var fd = new FormData();
        fd.append('id', this.machineid);
        // fd.append('user_id', this.sample_test.user_id);
        fd.append('reason', this.login.value.reason);
        // fd.append('user_name', this.login.value.name);
        fd.append('slave_file', this.file2);
        // fd.append('date',this.date);
        fd.append('file_name', this.filName);
        // fd.append('old_revision_no', this.login.value.old_revision_no);
        // fd.append('new_revision_no', this.login.value.new_revision_no);
        // let data = {
        //   "id": this.machineid,
        //   "user_id": this.sample_test.user_id,
        //   "reason": this.login.value.reason,
        //   "file_name": this.filName,
        //   "file_Name": this.file2
        // }
        console.log(fd);
        //  this.http.post('http:///192.168.0.237:4000/api/v1/compare_reason', fd, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).subscribe(res => {
        //    console.log(res);
        this.http.post("http://192.168.0.237:4000/api/v1/file_move", fd, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).subscribe(resp => {
            console.log(resp);
            alert(resp['status']);
            this.ngOnInit();
        });
        this.submitted = false;
        this.login.reset();
        this.filName = "";
        this.Compare = false;
        this.slave_file = "";
        this.filName1 = "";
        this.file_path = "";
        this.file_name = "";
        this.fileName1 = "";
        this.filetext1 = "";
        this.me.FileText = "";
        this.compareResults = "";
        this.machinesArray = "";
        // 192.168.0.237:4030/api/v1/file_move?
    }
    old(arg0, old) {
        throw new Error("Method not implemented.");
    }
    toggle() {
        this.Compare = !this.Compare;
        // CHANGE THE NAME OF THE BUTTON.
        console.log(this.Compare);
        if (this.Compare)
            this.buttonName = "Compare";
        else
            this.buttonName = "Compare";
    }
    change(event) {
        this.date = event.value;
    }
    logout() {
        localStorage.clear();
        this.route.navigateByUrl('');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _Nav_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'tda-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);

// @Component({
//   selector: 'dialog-page',
//   templateUrl: './dialog.component.html',
// })
// export class Dialog {
//   login:FormGroup;
//   reason:any;
//   // machineid: any;
//   constructor(private fb:FormBuilder,
//     public dialogRef: MatDialogRef<Dialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {
//       this.login=this.fb.group({
//         changed:["",Validators.required],
//         old:["",Validators.required],
//         new:["",Validators.required],
//         reason:["",Validators.required]
//       })
//     }
//   loginform(val)
//   {
//     console.log(val)
//     var fd = new FormData();
//     fd.append('id', this.machineid);
//     fd.append('file_name', this.filName);
//     fd.append('slave_file', this.file2);
//     console.log(fd);
//     //  this.http.post('http:///192.168.0.237:4000/api/v1/compare_reason', fd, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).subscribe(res => {
//     //    console.log(res);
//        this.http.post("http:///192.168.0.237:4000/api/v1/file_move", fd, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }).subscribe(resp => {
//       console.log(resp);
//       alert(resp['status'])
//   })
//   }
//   filName(arg0: string, filName: any) {
//     throw new Error("Method not implemented.");
//   }
//   machineid(arg0: string, machineid: any) {
//     throw new Error("Method not implemented.");
//   }
// }
// Method : POST
// url : http://183.82.250.137:4000/api/v1/compare_reason?
// Parametrs :
// {
//   "id": "40",
//   "user_id": "56",
//   "reason": "Comparing the master program and slave program"
// }
// Method : GET
// url : http://183.82.250.137:4000/api/v1/file_path?id=40


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_ngx_text_diff_src_lib_ngx_text_diff_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../projects/ngx-text-diff/src/lib/ngx-text-diff.module */ "./projects/ngx-text-diff/src/lib/ngx-text-diff.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
















const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }];
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _projects_ngx_text_diff_src_lib_ngx_text_diff_module__WEBPACK_IMPORTED_MODULE_5__["NgxTextDiffModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
        ]
    })
], HomeModule);

// import { NgxTextDiffModule } from '../../projects/ngx-text-diff/src/lib/ngx-text-diff.module';


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map